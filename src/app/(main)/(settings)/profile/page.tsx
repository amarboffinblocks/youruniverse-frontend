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
                    <Tabs defaultValue="profile" className="mt-10 !flex-row h-full">
                        <TabsList className="flex-col  bg-transparent gap-6 h-fit my-auto ">
                            <TabsTrigger value="profile" className=" !h-fit  data-[state=active]:!bg-transparent  text-white/80 transition data-[state=active]:text-primary !p-0"><Profile className="size-60  " /></TabsTrigger>
                            <TabsTrigger value="settings" className="data-[state=active]:!bg-transparent text-white/80 transition data-[state=active]:text-primary "><Settings className="size-60 " /></TabsTrigger>
                        </TabsList>
                        <TabsContent value="profile" className="text-white px-20 ">
                            <ProfileForm />
                        </TabsContent>
                        <TabsContent value="settings" className="text-white px-20">
                            <div className="h-full w-full flex justify-center items-center" >
                                <div className="text-center">
                                    <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 animate-pulse">
                                        Coming Soon
                                    </h1>

                                    <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mb-6">
                                        {`We're working hard to bring you something amazing. Stay tuned!`}
                                    </p>
                                </div>

                            </div>
                        </TabsContent>

                    </Tabs>
                </Container>
            </div>
            <BreadcrumbElements />
        </div>
    );
}
