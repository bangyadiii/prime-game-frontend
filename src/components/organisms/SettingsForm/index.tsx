import Image from "next/image";
import React from "react";
import UploadIcon from "@/app/assets/svg/upload.svg";
import TrashBinIcon from "@/app/assets/svg/trash-bin-icon.svg"

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
                <label
                    htmlFor="name"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                    Full Name
                </label>
                <input
                    type="text"
                    className="form-control rounded-pill text-lg"
                    id="name"
                    name="name"
                    aria-describedby="name"
                    placeholder="Enter your name"
                />
            </div>
            <div className="pt-30">
                <label
                    htmlFor="email"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    className="form-control rounded-pill text-lg"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Enter your email address"
                />
            </div>
            <div className="pt-30">
                <label
                    htmlFor="phone"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                    Phone
                </label>
                <input
                    type="tel"
                    className="form-control rounded-pill text-lg"
                    id="phone"
                    name="phone"
                    aria-describedby="phone"
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
