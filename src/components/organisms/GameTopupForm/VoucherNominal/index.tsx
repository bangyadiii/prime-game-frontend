import React from "react";
import IconCheck from "@/assets/svg/icon-check.svg";
import Image from "next/image";
import currency from "currency.js";

interface VoucherNominalProps {
    htmlId: string;
    coinIcon: any;
    coinAmount: number;
    coinPrice: number;
}

function VoucherNominal({
    coinAmount,
    coinIcon,
    coinPrice,
    htmlId,
}: VoucherNominalProps) {
    return (
        <label
            className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor={htmlId}
        >
            <input
                className="d-none"
                type="radio"
                id={htmlId}
                name="topup"
                defaultValue={htmlId}
            />
            <div className="detail-card">
                <div className="d-flex justify-content-between">
                    <p className="text-3xl color-palette-1 m-0">
                        <span className="fw-medium">{coinAmount}</span>
                        <Image
                            src={coinIcon}
                            width={30}
                            height={30}
                            alt="coin icon"
                            style={{
                                marginLeft: 10,
                            }}
                        />
                    </p>
                    <IconCheck id="icon-check" />
                </div>
                <p className="text-lg color-palette-1 m-0">
                    {currency(coinPrice).format({
                        symbol: "Rp",
                        separator: ".",
                    })}
                </p>
            </div>
        </label>
    );
}

export default VoucherNominal;
