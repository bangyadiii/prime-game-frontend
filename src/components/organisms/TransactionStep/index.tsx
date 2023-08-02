import React from "react";
import FeatureFillIcon from "@/assets/svg/feature-fillup-icon.svg";
import FeatureStarIcon from "@/assets/svg/feature-start-icon.svg";
import FeatureFinishIcon from "@/assets/svg/feature-finish-icon.svg";
import StepItem from "@/components/molecules/StepItem";

function TransactionStep() {
    return (
        <section id="feature" className="feature pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
                    It’s Really That
                    <br /> Easy to Win the Game
                </h2>
                <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                    <div className="col-lg-4">
                        <StepItem
                            Icon={FeatureStarIcon}
                            title={"1. Start"}
                            description={
                                <>
                                    Pilih salah satu game
                                    <br />
                                    yang ingin kamu top up
                                </>
                            }
                        />
                    </div>
                    <div className="col-lg-4">
                        <StepItem
                            Icon={FeatureFillIcon}
                            title={"2. Fill Up"}
                            description={
                                <>
                                    Top up sesuai dengan
                                    <br />
                                    nominal yang sudah tersedia
                                </>
                            }
                        />
                    </div>
                    <div className="col-lg-4">
                        <StepItem
                            Icon={FeatureFinishIcon}
                            title={"3. Be a Winner"}
                            description={
                                <>
                                    Siap digunakan untuk
                                    <br />
                                    improve permainan kamu
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TransactionStep;
