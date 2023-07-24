// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "@/app/assets/css/homepage.css";
import "@/app/assets/css/utilities.css";
import "@/app/assets/css/detail.css";
import "@/app/assets/css/checkout.css";
import "@/app/assets/css/complete-checkout.css";
import "@/app/assets/css/sign-in.css";
import "@/app/assets/css/sign-up.css";
import "@/app/assets/css/sign-up-photo-success.css";
import "@/app/assets/css/sign-up-photo.css";
import "@/app/assets/css/transactions-detail.css";
import "@/app/assets/css/transactions.css";
import "@/app/assets/css/sidebar.css";
import "@/app/assets/css/edit-profile.css";
import "@/app/assets/css/navbar-log-in.css";
import "@/app/assets/css/overview.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

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
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                crossOrigin="anonymous"
            ></Script>

            <body className={inter.className}>{children}</body>
        </html>
    );
}
