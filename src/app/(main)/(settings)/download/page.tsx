
import React, { SVGProps } from "react";
import BreadcrumbElements from "@/components/elements/breadcrumb-elements";
import Container from "@/components/elements/container";
import Android from "@/components/icons/android";
import Apple from "@/components/icons/apple";
import Ios from "@/components/icons/ios";
import Linux from "@/components/icons/linux";
import Window from "@/components/icons/window";
interface DownloadItem {
  name: string;
  icon: React.FC<SVGProps<SVGSVGElement>>; 
  link: string;
};
const downloads :DownloadItem[]  = [
    {
        name: "Android",
        icon: Android,
        link: "/downloads/android.apk",
    },
    {
        name: "Windows",
        icon: Window,
        link: "/downloads/windows.exe",
    },
    {
        name: "Linux",
        icon: Linux,
        link: "/downloads/linux.AppImage",
    },
    {
        name: "macOS",
        icon: Apple,
        link: "/downloads/macos.dmg",
    },
    {
        name: "iOS",
        icon: Ios,
        link: "/downloads/ios.ipa",
    },
];

export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1 ">
                <Container>
                    <div className=" mt-40 text-center px-4">
                        <h1 className="text-3xl text-white font-bold mb-10">Download Your App</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {downloads.map((item, index:number) => {
                                const Icon = item.icon || null
                                return (
                                    <div key={index} className="flex flex-col relative items-center justify-center space-y-3 aspect-square  p-4">

                                        {Icon && <Icon className=" size-40 text-white  " />}

                                        {/* <Link href={item.link} target="_blank">
                                            <Button className="w-full">
                                                {item.name}
                                            </Button>
                                        </Link> */}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Container>
            </div>
            <BreadcrumbElements />
        </div>
    );
}
