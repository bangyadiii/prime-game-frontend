import React from "react";

type InputProps = {
    htmlId: string;
    htmlName: string;
    labelName: string;
    placeholder: string;
};

export default function Input({ htmlId, htmlName, labelName, placeholder }: InputProps) {
    return (
        <>
            <label
                htmlFor={htmlId}
                className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
                {labelName}
            </label>
            <input
                type="tel"
                className="form-control rounded-pill text-lg"
                id={htmlId}
                name={htmlName}
                aria-describedby="phone"
                placeholder={placeholder}
            />
        </>
    );
}
