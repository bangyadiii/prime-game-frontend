import React from "react";
import GameDesktopIcon from "@/app/assets/svg/game-desktop-icon.svg";
import GameMobileIcon from "@/app/assets/svg/game-mobile-icon.svg";
import OtherCategoryIcon from "@/app/assets/svg/other-category-icon.svg";
import CategoriesCard from "@/components/molecules/CategoriesCard";

export default function GameTransactionStat() {
    return (
        <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
                Top Up Categories
            </p>
            <div className="main-content">
                <div className="row">
                    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                        <CategoriesCard
                            Icon={GameDesktopIcon}
                            gameCategory={
                                <>
                                    Game
                                    <br /> Desktop
                                </>
                            }
                            totalSpent={18000500}
                        />
                    </div>
                    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                        <CategoriesCard
                            Icon={GameMobileIcon}
                            gameCategory={
                                <>
                                    Game
                                    <br /> Mobile
                                </>
                            }
                            totalSpent={8455000}
                        />
                    </div>
                    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                        <div className="categories-card">
                            <div className="d-flex align-items-center mb-24">
                                <OtherCategoryIcon width={60} height={60} />
                                <p className="color-palette-1 mb-0 ms-12">
                                    Other
                                    <br /> Categories
                                </p>
                            </div>
                            <div>
                                <p className="text-sm color-palette-2 mb-1">
                                    Total Spent
                                </p>
                                <p className="text-2xl color-palette-1 fw-medium m-0">
                                    Rp 5.000.000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
