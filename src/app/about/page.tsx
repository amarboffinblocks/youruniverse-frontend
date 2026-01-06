"use client";

import React from "react";
import LandingHeader from "@/components/layout/landing-header";
import LandingFooter from "@/components/layout/landing-footer";
import { Sparkles } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
            <LandingHeader simple={true} />
            <main className="flex-1 pt-32 pb-20 px-4">
                <div className="mx-auto max-w-4xl space-y-12">
                    <div className="text-center space-y-6">

                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            Building the Universe of <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Personal AI</span>
                        </h1>
                    </div>

                    <div className="prose prose-invert prose-lg mx-auto text-gray-400">
                        <p>
                            YourUniverse.AI started with a simple question: "Why should valid creativity be gatekept by hardware limitations or privacy concerns?"
                        </p>
                        <p>
                            We set out to build a platform that democratizes access to powerful, locally-run AI models. By combining state-of-the-art interface design with robust privacy controls, we offer a sanctuary for writers, roleplayers, and dreamers.
                        </p>
                        <h3>Our Values</h3>
                        <ul>
                            <li><strong>Privacy First:</strong> Your data never leaves your device unless you want it to.</li>
                            <li><strong>Creative Freedom:</strong> Uncensored, unmoderated, purely your imagination.</li>
                            <li><strong>Open Source:</strong> We believe in the power of community-driven development.</li>
                        </ul>
                    </div>
                </div>
            </main>
            <LandingFooter />
        </div>
    );
}
