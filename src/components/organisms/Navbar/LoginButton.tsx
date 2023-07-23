import Image from "next/image";
import React from "react";
import Navlink from "../../molecules/Navlink/Navlink";
import Link from "next/link";

interface LoginButtonProps {
    isLogin?: boolean;
}

function LoginButton({ isLogin }: LoginButtonProps) {
    if (isLogin) {
        return (
            <Navlink
                title="Sign In"
                hrefLink="sign-in"
                classnames="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
            />
        );
    }
    return (
        <>
            <li className="nav-item my-auto dropdown d-flex">
                <div className="vertical-line d-lg-block d-none"></div>
                <div>
                    <Link
                        className="dropdown-toggle ms-lg-40"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <Image
                            src="/img/avatar-1.png"
                            className="rounded-circle"
                            width={40}
                            height={40}
                            alt=""
                        />
                    </Link>

                    <ul
                        className="dropdown-menu border-0"
                        aria-labelledby="dropdownMenuLink"
                    >
                        <li>
                            <a
                                className="dropdown-item text-lg color-palette-2"
                                href="#"
                            >
                                My Profile
                            </a>
                        </li>
                        <li>
                            <a
                                className="dropdown-item text-lg color-palette-2"
                                href="#"
                            >
                                Wallet
                            </a>
                        </li>
                        <li>
                            <a
                                className="dropdown-item text-lg color-palette-2"
                                href="/usernameuser"
                            >
                                Account Settings
                            </a>
                        </li>
                        <li>
                            <a
                                className="dropdown-item text-lg color-palette-2"
                                href="sign-in"
                            >
                                Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </>
    );
}

export default LoginButton;
