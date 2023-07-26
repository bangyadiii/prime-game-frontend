"use client";
import AOS from "aos";
import { useEffect } from "react";
import Navbar from "@/components/organisms/Navbar/Navbar";
import MainHero from "@/components/organisms/MainHero/MainHero";
import TransactionStep from "@/components/organisms/TransactionStep";
import FeaturedGame from "@/components/organisms/FeaturedGame";
import Reached from "@/components/organisms/Reached";
import Footer from "@/components/organisms/Footer";
import Story from "@/components/organisms/Story";

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Header */}
            <MainHero />
            {/* 3 Column - Feature */}
            <TransactionStep />
            {/* 5 Column - Featured-game */}
            <FeaturedGame />
            {/* Reached */}
            <Reached />
            {/* Story */}
            <Story />
            {/* Footer */}
            <Footer /> 
        </>
    );
}
