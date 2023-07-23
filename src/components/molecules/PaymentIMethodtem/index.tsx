import React from "react";
import IconCheck from "@/app/assets/svg/icon-check.svg";

interface PaymentIMethodtemProps {
    title: string;
    description: string;
    htmlId: string;
}

function PaymentMethodItem({
    title,
    description,
    htmlId,
}: PaymentIMethodtemProps) {
    return (
        <label
            className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor={htmlId}
        >
            <input
                className="d-none"
                type="radio"
                id={htmlId}
                name="paymentMethod"
                defaultValue="transfer"
            />
            <div className="detail-card">
                <div className="d-flex justify-content-between">
                    <p className="text-3xl color-palette-1 fw-medium m-0">
                        {title}
                    </p>
                    <IconCheck id="icon-check" />
                </div>
                <p className="text-lg color-palette-1 m-0">{description}</p>
            </div>
        </label>
    );
}

export default PaymentMethodItem;
