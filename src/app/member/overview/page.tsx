import SideBar from "@/components/organisms/Sidebar";
import React from "react";
import GameTransactionStat from "@/components/organisms/TopUpCategories";
import LatestTransactionTable from "@/components/organisms/LatestTransactionTable";

export default function Page() {
    return (
        <section className="overview overflow-auto">
            <SideBar  activeMenu="overview"/>
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
