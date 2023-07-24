import SideBar from "@/components/organisms/Sidebar";
import Image from "next/image";
import React from "react";
import GameDesktopIcon from "@/app/assets/svg/game-desktop-icon.svg";
import GameMobileIcon from "@/app/assets/svg/game-mobile-icon.svg";
import OtherCategoryIcon from "@/app/assets/svg/other-category-icon.svg";
import CategoriesCard from "@/components/molecules/CategoriesCard";
import GameTransactionStat from "@/components/organisms/TopUpCategories";
import LatestTransactionTable from "@/components/organisms/LatestTransactionTable";

export default function Page() {
    return (
        <section className="overview overflow-auto">
            <SideBar />
            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                        Overview
                    </h2>
                    <GameTransactionStat />

                    <LatestTransactionTable />
                </div>
            </main>
        </section>
    );
}
