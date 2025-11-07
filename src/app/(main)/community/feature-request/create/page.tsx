

import Footer from "@/components/layout/footer";
import Container from "@/components/elements/container";
import FeatureForm from '@/components/forms/feature-form'

export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1">

                <Container className="max-w-4xl h-full">
                    <p className="text-primary text-[3rem] text-bold p-0 m-0">Create a Feature Request</p>
                    <p className="text-muted-foreground p-0 m-0">Help us to continue to improve YourUniverse by submitting your Feature Request</p>
                    <FeatureForm />
                </Container>
            </div>
            <Footer />
        </div>
    );
}
