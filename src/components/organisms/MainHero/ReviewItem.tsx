import Image from "next/image";
import React from "react";
import StarIcon from "@/assets/svg/star.svg";

function ReviewItem() {
    return (
        <>
            <div className="d-flex align-items-center mb-16 gap-3">
                <Image
                    src="/img/Header-2.png"
                    width={40}
                    height={40}
                    className="rounded-pill"
                    alt=""
                />
                <div>
                    <p className="text-sm fw-medium color-palette-1 m-0">
                        Shayna Anne
                    </p>
                    <p className="text-xs fw-light color-palette-2 m-0">
                        Professional Gamer
                    </p>
                </div>
            </div>
            <div className="d-flex gap-2">
                <StarIcon width={24} height={22} alt="" />
                <StarIcon width={24} height={22} alt="star icon" />
                <StarIcon width={24} height={22} alt="star icon" />
                <StarIcon width={24} height={22} alt="star icon" />
                <StarIcon width={24} height={22} alt="star icon" />
            </div>
        </>
    );
}

export default ReviewItem;
