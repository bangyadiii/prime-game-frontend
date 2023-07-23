import ReachedItem from "@/components/molecules/ReachedItem";
import React from "react";

function Reached() {
    return (
        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <ReachedItem stats="290M+" statsName="Players Top Up" />
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />

                    <ReachedItem stats="12.500" statsName="Games Available" />
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />

                    <ReachedItem stats="99.9%" statsName="Happy Players" />
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
                    <ReachedItem stats="4.7" statsName="Rating Worldwid" />
                </div>
            </div>
        </section>
    );
}

export default Reached;
