import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BreadcrumbElements from "@/components/elements/breadcrumb-elements";
import Profile from "@/components/icons/profile";
import Settings from "@/components/icons/settings";
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
