

import BreadcrumbElements from "@/components/elements/breadcrumb-elements";
import PersonaPage from "@/components/pages/persona-page";

export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1">
                <PersonaPage />
            </div>
            <BreadcrumbElements />
        </div>
    );
}
