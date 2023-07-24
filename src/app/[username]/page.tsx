import SideBar from "@/components/organisms/Sidebar";
import React from "react";
import SettingsForm from "@/components/organisms/SettingsForm";

function Page() {
    return (
        <section className="edit-profile overflow-auto">
            <SideBar activeMenu="setting" />
            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                        Settings
                    </h2>
                    <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                        <SettingsForm /> 
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Page;
