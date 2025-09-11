

import BreadcrumbElements from "@/components/elements/breadcrumb-elements";
import Container from "@/components/elements/container";
import CharacterForm from "@/components/forms/character-form";
export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1">
                <Container className="max-w-4xl">
                    <CharacterForm />
                </Container>
            </div>
            <BreadcrumbElements />
        </div>
    );
}
