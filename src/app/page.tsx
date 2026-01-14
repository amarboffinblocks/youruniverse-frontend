"use client";

import { useState, useEffect } from "react";
import LandingFooter from "@/components/layout/landing-footer";
import LandingHeader from "@/components/layout/landing-header";
import LandingHero from "@/components/elements/landing-hero";
import AiExperience from "@/components/sections/ai-experience";
import CharacterMarket from "@/components/sections/character-market";
import BuildUniverses from "@/components/sections/build-universes";
import CommunityForums from "@/components/sections/community-forums";
import DownloadSection from "@/components/sections/download-section";
import TrustTransparency from "@/components/sections/trust-transparency";
import AboutSection from "@/components/sections/about-section";
import BlogSection from "@/components/sections/blog-section";
import CtaSection from "@/components/sections/cta-section";
import AgeVerificationModal from "@/components/modals/age-verification-modal";

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for existing verification
    const status = localStorage.getItem("isVerified");
    if (status === "true") setIsVerified(true);
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className={`flex-1 flex flex-col relative min-h-screen bg-[#0a0a0a] text-white overflow-y-auto overflow-x-hidden scroll-smooth ${!isVerified ? 'h-screen overflow-hidden' : ''}`}>
      {/* {!isVerified && (
        <AgeVerificationModal
          onVerified={() => {
            setIsVerified(true);
            localStorage.setItem("isVerified", "true");
          }}
        />
      )} */}

      <LandingHeader />
      <main className="flex-1 w-full flex flex-col items-center">
        <LandingHero />
        <section id="about" className="w-full">
          <AboutSection />
        </section>
        <AiExperience />
        <section id="market" className="w-full">
          <CharacterMarket />
        </section>
        <BuildUniverses />
        <section id="forum" className="w-full">
          <CommunityForums />
        </section>
        <section id="blog" className="w-full">
          <BlogSection />
        </section>
        <DownloadSection />
        <TrustTransparency />
        <CtaSection />
      </main>

      <LandingFooter />

      {/* Background Gradients/Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}
