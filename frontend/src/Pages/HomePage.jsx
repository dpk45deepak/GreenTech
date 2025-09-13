import React from "react";
import HeroSection from "../Components/LandingPage/HeroSection";
import InnovationCarousel from "../Components/LandingPage/InnovationCarousel";
import About from "../Components/LandingPage/AboutSection";
import Community from "../Components/LandingPage/ConnectSection";
import Innovation from "../Components/LandingPage/InnovationSection";
import Stats from "../Components/LandingPage/StatsSection";
import Benefits from "../Components/LandingPage/BenefitsSection";
import Footer from "../Components/LandingPage/Footer";

function HomePage() {
    return (
        <div className="min-h-screen bg-white">
        <HeroSection />
        <About />
        <Community />
        <Innovation />
        <InnovationCarousel />
        <Stats />
        <Benefits />
        <Footer />
        </div>
    );
}

export default HomePage;
