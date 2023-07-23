import React from "react";
interface StepItemProps {
    Icon: any;
    title: any;
    description: any;
}

function StepItem({ Icon, title, description }: StepItemProps) {
    return (
        <div className="card feature-card border-0">
            <Icon width={80} height={80} className="mb-30" />
            <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
            <p className="text-lg color-palette-1 mb-0">{description}</p>
        </div>
    );
}

export default StepItem;
