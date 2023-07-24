import Image from "next/image";
import React, { useState } from "react";
import { sidebarList } from "./sidebarList";
import SidebarItem from "@/components/molecules/SidebarItem";
import ProfileBadge from "@/components/molecules/ProfileBadge";

type SidebarProps = {
    activeMenu: "overview" | "transaction" | "setting";
};

export default function SideBar({ activeMenu }: SidebarProps) {
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <ProfileBadge />
                <div className="menus">
                    {sidebarList.map((item) => {
                        return (
                            <SidebarItem
                                key={`sidebar-${item.title.toLowerCase()}`}
                                Icon={item.icon}
                                title={item.title}
                                htmlHref={item.htmlHref}
                                active={item.title.toLowerCase() === activeMenu}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
