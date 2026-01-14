"use client";

import React from "react";
import LandingHeader from "@/components/layout/landing-header";
import LandingFooter from "@/components/layout/landing-footer";
import { motion } from "framer-motion";
import { Sparkles, Heart, Shield, Zap, CheckCircle2 } from "lucide-react";

const principles = [
    {
        title: "Simplicity is Beauty, & Beauty is Complexity",
        icon: Sparkles,
        items: [
            "Ease of use",
            "Elegant solutions",
            "Beauty at the heart of everything we create"
        ],
        gradient: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-500/30"
    },
    {
        title: "You, then me",
        icon: Heart,
        items: [
            "To create a quality AI chatbot experience that helps in as many ways as possible",
            "To create a Trusted AI experienced",
            "To create a resource that helps people live fuller lives",
            "To help people walk out the door"
        ],
        gradient: "from-purple-500/20 to-pink-500/20",
        borderColor: "border-purple-500/30"
    },
    {
        title: "Power is an Illusion & Control is Reality",
        icon: Shield,
        items: [
            "To help people become more comfortable and in control when using AI",
            "To help people take control of their lives through our mental health / companionship characters",
            "To help our Elders feel more in control by providing companionship, and aid should the need arise",
            "To hopefully make life better for us all"
        ],
        gradient: "from-emerald-500/20 to-teal-500/20",
        borderColor: "border-emerald-500/30"
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen text-white selection:bg-blue-500/30">
            <LandingHeader simple={true} />

            <main className="flex-1 pt-32 pb-20 px-4">
                <div className="mx-auto max-w-5xl space-y-24">

                    {/* Hero Section */}
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                                Creating <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
                                    YourUniverse.AI
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-xl text-gray-400 leading-relaxed font-light"
                        >
                            <p>
                                YourUniverse.AI servers as a gateway to a Universe of your own. A temporary
                                escape, a companion, and an aid to keep by your side.
                            </p>
                            <p>
                                We set out to build a platform that allows access to powerful, locally-run AI
                                models. We did this by combining a state-of-the-art interface design with robust
                                privacy controls. Offering a sanctuary for writers, roleplayers, and dreamers.
                            </p>
                        </motion.div>
                    </div>

                    {/* Guiding Principles Section */}
                    <section className="space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Guiding Principles</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                We at YourUniverse.AI follow 3 guiding principles in everything we do.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {principles.map((principle, index) => (
                                <motion.div
                                    key={principle.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative p-8 rounded-3xl border ${principle.borderColor} bg-linear-to-br ${principle.gradient} backdrop-blur-sm group hover:scale-[1.02] transition-transform duration-300 flex flex-col`}
                                >
                                    <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                        <principle.icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
                                        {principle.title}
                                    </h3>

                                    <ul className="space-y-4 flex-1">
                                        {principle.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-gray-600 group-hover:text-blue-500/50 transition-colors" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            <LandingFooter />
        </div>
    );
}
