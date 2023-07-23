import React from "react";
import PaymentMethodItem from "../../../molecules/PaymentIMethodtem";

function PaymentMethod() {
    return (
        <>
            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
                Payment Method
            </p>
            <fieldset id="paymentMethod">
                <div className="row justify-content-between">
                    <PaymentMethodItem
                        description="Worldwide Available"
                        title="Transfer"
                        htmlId="tranfer"
                    />

                    <PaymentMethodItem
                        title="VISA"
                        description="Credit Card"
                        htmlId="visa"
                    />
                    <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
                </div>
            </fieldset>
        </>
    );
}

export default PaymentMethod;
