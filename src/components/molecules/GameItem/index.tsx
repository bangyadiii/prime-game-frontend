import Image from "next/image";
import React from "react";
import GameControllerIcon from "@/app/assets/svg/game-controller-icon.svg";

interface GameItemProps {
    gameName: string;
    gameType: string;
    imgSrc: string;
}

function GameItem({ gameName, gameType, imgSrc }: GameItemProps) {
    return (
        <div className="featured-game-card position-relative">
            <div className="blur-sharp">
                <Image src={imgSrc} width={205} height={270} alt="" />
            </div>
            <div className="cover position-absolute bottom-0 m-32">
                <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                        <GameControllerIcon width={54} height={36} />
                    </div>
                    <div>
                        <p className="fw-semibold text-white text-xl m-0">
                            {gameName}
                        </p>
                        <p className="fw-light text-white m-0">{gameType}</p>
                    </div>
                </div>
            </div>
            <a href="./src/detail.html" className=" stretched-link"></a>
        </div>
    );
}

export default GameItem;
