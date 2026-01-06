


import ComingSoon from "@/components/elements/coming-soon";
import Container from "@/components/elements/container";

export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1">
                <Container className="max-w-4xl h-full">
                    <ComingSoon />
                </Container>
            </div>

        </div>
    );
}
