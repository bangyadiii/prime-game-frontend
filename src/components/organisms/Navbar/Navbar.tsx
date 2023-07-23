import React from "react";
import Image from "next/image";
import Navlink from "../../molecules/Navlink/Navlink";
import LoginButton from "./LoginButton";
import ToggleMenu from "./ToggleMenu";

function Navbar() {
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image
                            src={"/icon/logo.png"}
                            width={60}
                            height={60}
                            alt="logo-app"
                        />
                    </a>
                    <ToggleMenu />
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                            <Navlink title="Home" hrefLink="/" active />
                            <Navlink title="Games" hrefLink="/games/misalkan" />
                            <Navlink title="Rewards" hrefLink="#" />
                            <Navlink title="Discover" hrefLink="#" />
                            <Navlink title="Global Rank" hrefLink="#" />

                            <LoginButton />
                        </ul>
                        T
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
