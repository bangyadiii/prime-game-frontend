import React from "react";

function VerifyGameId() {
    return (
        <div className="">
            <label
                htmlFor="ID"
                className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
                Verify ID
            </label>
            <input
                type="text"
                className="form-control rounded-pill text-lg"
                id="ID"
                name="ID"
                aria-describedby="verifyID"
                placeholder="Enter your ID"
            />
        </div>
    );
}

export default VerifyGameId;
