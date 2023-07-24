import Image from "next/image";
import React from "react";
import UploadIcon from "@/app/assets/svg/upload.svg";
import TrashBinIcon from "@/app/assets/svg/trash-bin-icon.svg";
import Input from "@/components/atoms/Input";

export default function SettingsForm() {
    return (
        <form action="">
            <div className="photo d-flex">
                <div className="position-relative me-20">
                    <Image
                        src="/img/avatar-1.png"
                        width={90}
                        height={90}
                        className="avatar img-fluid"
                        alt="avatar"
                    />
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                        <TrashBinIcon width={24} height={24} />
                    </div>
                </div>
                <div className="image-upload">
                    <label htmlFor="avatar">
                        <UploadIcon width={90} height={90} />
                    </label>
                    <input
                        id="avatar"
                        type="file"
                        name="avatar"
                        accept="image/png, image/jpeg"
                    />
                </div>
            </div>
            <div className="pt-30">
                <Input
                    htmlId="name"
                    htmlName="name"
                    labelName="Full Name"
                    placeholder="Enter your name"
                />
            </div>
            <div className="pt-30">
                <Input
                    htmlId="email"
                    htmlName="email"
                    labelName="Email"
                    placeholder="Enter your email address"
                />
            </div>
            <div className="pt-30">
                <Input
                    htmlId="phone"
                    htmlName="phone"
                    labelName="Phone"
                    placeholder="Enter your phone number"
                />
            </div>
            <div className="button-group d-flex flex-column pt-50">
                <button
                    type="submit"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                >
                    Save My Profile
                </button>
            </div>
        </form>
    );
}
