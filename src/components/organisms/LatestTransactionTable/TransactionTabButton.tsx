import Link from "next/link";
import React from "react";

type TransactionTabProps = {
    name: "All Trx" | "Success" | "Pending" | "Failed";
    href: string,
    active?: boolean;
};

export default function TransactionTabButton({
    name,
    active,
}: TransactionTabProps) {
    let dataFilter = name.toLowerCase();
    if (dataFilter === "All Trx") dataFilter = "*";

    return (
        <Link
            data-filter={dataFilter}
            href="#"
            className={`btn btn-status rounded-pill text-sm me-3 ${
                active && "btn-active"
            }`}
        >
            {name}
        </Link>
    );
}
