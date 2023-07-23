import Image from "next/image";
import React from "react";
import Link from "next/link";
import VerifyGameId from "@/components/molecules/VerifyGameId";
import PaymentMethod from "./PaymentMethod";
import NominalList from "./NominalList";

function GameTopup() {
    return (
        <form action="/checkout" method="POST">
            <div className="pt-md-50 pt-30">
                <VerifyGameId />
            </div>
            <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                <NominalList />
            </div>
            <div className="pb-md-50 pb-20">
                <PaymentMethod />
            </div>
            <div className="pb-50">
                <label
                    htmlFor="bankAccount"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                    Bank Account Name
                </label>
                <input
                    type="text"
                    className="form-control rounded-pill text-lg"
                    id="bankAccount"
                    name="bankAccount"
                    aria-describedby="bankAccount"
                    placeholder="Enter your Bank Account Name"
                />
            </div>
            <div className="d-sm-block d-flex flex-column w-100">
                <Link
                    href="/checkout"
                    type="submit"
                    className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
                >
                    Continue
                </Link>
            </div>
        </form>
    );
}

export default GameTopup;
