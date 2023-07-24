import Link from "next/link";
import React from "react";

interface SideBarItemProps {
    Icon: any;
    title: string;
    htmlHref: string;
    active?: boolean;
}

export default function SidebarItem({
    Icon,
    title,
    htmlHref,
    active = false,
}: SideBarItemProps) {
    return (
        <div className={`item mb-30 ${active ? "active" : ""}`}>
            <Icon width={25} height={25} className={"icon me-3"} />
            <p className="item-title m-0">
                <Link href={htmlHref} className="text-lg text-decoration-none">
                    {title}
                </Link>
            </p>
        </div>
    );
}
