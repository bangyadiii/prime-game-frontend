import Footer from "@/components/organisms/Footer";
import GameTopupForm from "@/components/organisms/GameTopupForm";
import Navbar from "@/components/organisms/Navbar/Navbar";
import Image from "next/image";

export default function Page() {
    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Detail Content */}
            <section className="detail pt-lg-60 pb-50">
                <div className="container-xxl container-fluid">
                    <div className="detail-header pb-50">
                        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
                            Top Up
                        </h2>
                        <p className="text-lg color-palette-1 mb-0">
                            Perkuat akun dan jadilah pemenang
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-4">
                                    <Image
                                        src="/img/Thumbnail-3.png"
                                        width={280}
                                        height={380}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                {/* Mobile: Game title */}
                                <div className="col-md-12 col-8 d-md-none d-block">
                                    <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
                                        Mobile Legends:
                                        <br />
                                        The New Battle 2021
                                    </h2>
                                    <p className="text-sm color-palette-2 text-start mb-0">
                                        Category: Mobile
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                            {/* Desktop: Game title */}
                            <div className="pb-50 d-md-block d-none">
                                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
                                    Mobile Legends:
                                    <br />
                                    The New Battle 2021
                                </h2>
                                <p className="text-lg color-palette-2 mb-0">
                                    Category: Mobile
                                </p>
                            </div>
                            <hr />

                            <GameTopupForm />
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </>
    );
}
