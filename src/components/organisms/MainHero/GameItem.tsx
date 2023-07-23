import React from "react";

function GameItem() {
    return (
        <>
            <div className="position-relative d-flex flex-row justify-content-center mb-24">
                <img
                    src="/img/Header-3.png"
                    className="rounded-pill"
                    alt="header 3"
                />
                <p className="right-card-support text-white text-xxs text-center position-absolute m-0">
                    New
                </p>
            </div>
            <div>
                <p className="text-sm text-center m-0 fw-medium color-palette-1">
                    Lann Knight
                </p>
                <p className="fw-light text-center m-0 color-palette-2 text-xs">
                    Dota 2
                </p>
            </div>
        </>
    );
}

export default GameItem;
