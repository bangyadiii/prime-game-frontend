import React from "react";
import VoucherNominal from "../VoucherNominal";

function NominalList() {
    return (
        <>
            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
                Nominal Top Up
            </p>
            <div className="row justify-content-between">
                <VoucherNominal
                    coinAmount={125}
                    coinIcon="/dummy/diamond.png"
                    coinPrice={125000}
                    htmlId="topup1"
                />
                <VoucherNominal
                    coinAmount={225}
                    coinIcon="/dummy/diamond.png"
                    coinPrice={355000}
                    htmlId="topup2"
                />
                <VoucherNominal
                    coinAmount={350}
                    coinIcon="/dummy/diamond.png"
                    coinPrice={655000}
                    htmlId="topup3"
                />
                <VoucherNominal
                    coinAmount={950}
                    coinIcon="/dummy/diamond.png"
                    coinPrice={1055000}
                    htmlId="topup4"
                />
                <VoucherNominal
                    coinAmount={1050}
                    coinIcon="/dummy/diamond.png"
                    coinPrice={1555000}
                    htmlId="topup5"
                />

                <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
            </div>
        </>
    );
}

export default NominalList;
