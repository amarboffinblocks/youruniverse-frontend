import BreadcrumbElements from "@/components/elements/breadcrumb-elements";
import Container from "@/components/elements/container";
import ProfileForm from "@/components/forms/profile-form";
export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1 ">
                <Container className="h-full w-full">
                    <div className="text-white px-20 max-w-4xl mx-auto ">
                        <ProfileForm />
                    </div>
                </Container>
            </div>
            <BreadcrumbElements />
        </div>
    );
}
