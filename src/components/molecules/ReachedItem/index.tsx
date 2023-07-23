import React from "react";

interface ReachedItemProps {
    stats: string;
    statsName: string;
}

function ReachedItem({ stats, statsName }: ReachedItemProps) {
    return (
        <div className="me-lg-35">
            <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                {stats}
            </p>
            <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                {statsName}
            </p>
        </div>
    );
}

export default ReachedItem;
