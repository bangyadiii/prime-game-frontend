import GameItem from "@/components/molecules/GameItem";
import Image from "next/image";
import React from "react";

function FeaturedGame() {
    return (
        <section className="featured-game pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                    Our Featured
                    <br /> Games This Year
                </h2>
                <div
                    className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                    data-aos="fade-up"
                >
                    <GameItem
                        gameName="Super Mechs"
                        gameType="Mobile"
                        imgSrc="/img/Thumbnail-1.png"
                    />
                    <GameItem
                        gameName="Mobile Legends"
                        gameType="Mobile"
                        imgSrc="/img/Thumbnail-3.png"
                    />
                    <GameItem
                        gameName="Clash of Clans"
                        gameType="Mobile"
                        imgSrc="/img/Thumbnail-4.png"
                    />
                    <GameItem
                        gameName="Valorant"
                        gameType="Desktop"
                        imgSrc="/img/Thumbnail-5.png"
                    />
                    <GameItem
                        gameName="Call of Duty: Modern"
                        gameType="Mobile"
                        imgSrc="/img/Thumbnail-2.png"
                    />
                </div>
            </div>
        </section>
    );
}

export default FeaturedGame;
