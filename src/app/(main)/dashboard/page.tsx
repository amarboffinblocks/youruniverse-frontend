"use client";

import React from "react";
import Container from "@/components/elements/container";

const DashboardPage = () => {
    return (
        <div className="flex-1 bg-black text-white flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.20))]">
            <Container className="flex flex-col items-center justify-center gap-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    Welcome to Your Universe
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                    Select an option from the header to navigate through your personalized AI experience.
                </p>
                <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <p className="text-sm text-gray-400">
                        Get started by choosing a Chat, Model, or exploring the Community.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default DashboardPage;
