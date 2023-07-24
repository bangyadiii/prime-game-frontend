import Image from "next/image";
import React, { useState } from "react";
import OverviewIcon from "@/app/assets/svg/sidebar/overview.svg";
import TransactionIcon from "@/app/assets/svg/sidebar/transaction-icon.svg";
import MessageIcon from "@/app/assets/svg/sidebar/message-icon.svg";
import CardIcon from "@/app/assets/svg/sidebar/card-icon.svg";
import RewardIcon from "@/app/assets/svg/sidebar/reward-icon.svg";
import SettingIcon from "@/app/assets/svg/sidebar/setting-icon.svg";
import LogoutIcon from "@/app/assets/svg/sidebar/logout-icon.svg";
import SidebarItem from "@/components/molecules/SidebarItem";

export default function SideBar() {
    const sidebarList = [
        {
            icon: OverviewIcon,
            title: "Overview",
            htmlHref: "/overview",
        },
        {
            icon: TransactionIcon,
            title: "Transaction",
            htmlHref: "/transaction",
        },
        {
            icon: MessageIcon,
            title: "Messages",
            htmlHref: "/messages",
        },
        {
            icon: CardIcon,
            title: "Card",
            htmlHref: "/card",
        },
        {
            icon: RewardIcon,
            title: "Rewards",
            htmlHref: "/rewards",
        },
        {
            icon: SettingIcon,
            title: "Setting",
            htmlHref: "/settings",
        },
        {
            icon: LogoutIcon,
            title: "Logout",
            htmlHref: "/logout",
        },
    ];

    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <div className="user text-center pb-50 pe-30">
                    <Image
                        src="/img/avatar-1.png"
                        width={90}
                        height={90}
                        className="img-fluid mb-20"
                        alt="avatar"
                    />
                    <h2 className="fw-bold text-xl color-palette-1 m-0">
                        Shayna Anne
                    </h2>
                    <p className="color-palette-2 m-0">shayna@anne.com</p>
                </div>
                <div className="menus">
                    {sidebarList.map((item) => {
                        return (
                            <SidebarItem
                                key={`sidebar-${item.title}`}
                                Icon={item.icon}
                                title={item.title}
                                htmlHref={item.htmlHref}
                                active={item.title === "/settings"}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
