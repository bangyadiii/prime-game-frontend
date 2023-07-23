import React from "react";
import ReviewItem from "./ReviewItem";
import GameItem from "./GameItem";

function Illustration() {
    return (
        <div className="position-relative" data-aos="zoom-in">
            <img src="/img/Header-1.png" className="img-fluid" alt="header1" />
            <div className="card left-card position-absolute border-0">
                <ReviewItem />
            </div>
            <div className="card right-card position-absolute border-0">
                <GameItem />
            </div>
        </div>
    );
}

export default Illustration;
