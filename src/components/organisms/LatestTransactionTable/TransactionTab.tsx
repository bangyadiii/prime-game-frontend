import React from "react";
import TransactionTabButton from "./TransactionTabButton";

export default function TransactionTab() {
    return (
        <div id="list_status_title">
            <TransactionTabButton name="All Trx" href="#" active />
            <TransactionTabButton name="Success" href="#" />
            <TransactionTabButton name="Pending" href="#" />
            <TransactionTabButton name="Failed" href="#" />
        </div>
    );
}
