"use client"

import Footer from "@/components/layout/footer";
import ComingSoon from "@/components/elements/coming-soon";
import Container from "@/components/elements/container";
import { useParams } from "next/navigation";

export default function page() {
    const params = useParams()
    console.log(params)
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1">
                <Container className="max-w-4xl h-full">
                    <ComingSoon />
                </Container>
            </div>
            <Footer />
        </div>
    );
}
