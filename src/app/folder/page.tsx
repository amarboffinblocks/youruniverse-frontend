
import BreadcrumbElements from "@/components/elements/breadcrumb-elements";
import Container from "@/components/elements/container";
import CharacterPage from "@/components/pages/character-page";
import FolderPage from "@/components/pages/folder-page";


export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1 ">
                <Container className="h-full">

                    <FolderPage />
                </Container>
            </div>
            <BreadcrumbElements />
        </div>
    );
}
