import LatestTransactionItem from "@/components/molecules/LatestTransactionItem";
import React from "react";

export default function LatestTransactionTable() {
    return (
        <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                    <thead>
                        <tr className="color-palette-1">
                            <th className="text-start" scope="col">
                                Game
                            </th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <LatestTransactionItem
                            imgSrc="/img/overview-1.png"
                            gameName="Mobile Legends: The New Battle 2021"
                            gameCategory="Desktop"
                            amount={200}
                            price={290000}
                            trxStatus="Pending"
                        />
                        <LatestTransactionItem
                            imgSrc="/img/overview-2.png"
                            gameName="Call of Duty: Modern"
                            gameCategory="Desktop"
                            amount={550}
                            price={740000}
                            trxStatus="Success"
                        />
                        <LatestTransactionItem
                            imgSrc="/img/overview-3.png"
                            gameName="Clash of Clans"
                            gameCategory="Desktop"
                            amount={100}
                            price={120000}
                            trxStatus="Failed"
                        />
                        <LatestTransactionItem
                            imgSrc="/img/overview-4.png"
                            gameName="Mobile Legends"
                            gameCategory="Desktop"
                            amount={350}
                            price={960000}
                            trxStatus="Success"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    );
}
