// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/css/homepage.css";
import "@/assets/css/utilities.css";
import "@/assets/css/detail.css";
import "@/assets/css/checkout.css";
import "@/assets/css/complete-checkout.css";
import "@/assets/css/sign-in.css";
import "@/assets/css/sign-up.css";
import "@/assets/css/sign-up-photo-success.css";
import "@/assets/css/sign-up-photo.css";
import "@/assets/css/transactions-detail.css";
import "@/assets/css/transactions.css";
import "@/assets/css/sidebar.css";
import "@/assets/css/edit-profile.css";
import "@/assets/css/navbar-log-in.css";
import "@/assets/css/overview.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
// In app directory
import Providers from "@/utils/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Prime Game",
    description: "Prime Game",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <Head>
                {/* AOS Animation  */}
                <link
                    href="https://unpkg.com/aos@2.3.1/dist/aos.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </Head>
            <Script
                src="https://unpkg.com/aos@2.3.1/dist/aos.js"
                async
            ></Script>

            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
