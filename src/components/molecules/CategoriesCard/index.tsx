import React from "react";
import GameDesktopIcon from "@/app/assets/svg/game-desktop-icon.svg";
import currency from "currency.js";

type CategoriesCardProps = {
    Icon: any;
    gameCategory: any;
    totalSpent: number;
};

export default function CategoriesCard({
    Icon,
    totalSpent,
    gameCategory,
}: CategoriesCardProps) {
    return (
        <div className="categories-card">
            <div className="d-flex align-items-center mb-24">
                <Icon width={60} height={60} />
                <p className="color-palette-1 mb-0 ms-12">{gameCategory}</p>
            </div>
            <div>
                <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                <p className="text-2xl color-palette-1 fw-medium m-0">
                    {currency(totalSpent).format({
                        symbol: "Rp",
                    })}
                </p>
            </div>
        </div>
    );
}
