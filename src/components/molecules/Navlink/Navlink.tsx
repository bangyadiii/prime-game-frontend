import React from "react";
import cx from "classnames";
import Link from "next/link";

interface NavlinkProps {
    title: string;
    hrefLink: string;
    active?: boolean;
    classnames?: string;
}

function Navlink({ title, hrefLink = "/", active, classnames }: NavlinkProps) {
    const classNames = cx({
        "nav-link": true,
        active,
    });
    return (
        <li className="nav-item my-auto">
            <Link
                href={hrefLink}
                className={classNames.concat(` ${classnames}`)}
            >
                {title}
            </Link>
        </li>
    );
}

export default Navlink;
