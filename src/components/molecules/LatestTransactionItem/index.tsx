import currency from "currency.js";
import Image from "next/image";
import React from "react";

type LatestTransactionItemProps = {
    imgSrc: string;
    gameName: string;
    gameCategory: string;
    amount: number;
    price: number;
    trxStatus: "Pending" | "Success" | "Failed";
};

export default function LatestTransactionItem({
    imgSrc,
    amount,
    gameCategory,
    gameName,
    price,
    trxStatus,
}: LatestTransactionItemProps) {
    return (
        <tr className="align-middle center">
            <th scope="row">
                <Image
                    className="float-start me-3 mb-lg-0 mb-3"
                    src={imgSrc}
                    width={80}
                    height={60}
                    alt=""
                />
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">
                        {gameName}
                    </p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">
                        {gameCategory}
                    </p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0">{amount} Gold</p>
            </td>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0">
                    {currency(price).format({
                        symbol: "Rp",
                    })}
                </p>
            </td>
            <td>
                <div>
                    <span
                        className={`float-start icon-status  ${trxStatus.toLocaleLowerCase()}`}
                    />
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {trxStatus}
                    </p>
                </div>
            </td>
        </tr>
    );
}