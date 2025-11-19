import Container from "@/components/elements/container";
import Footer from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const policyLinks = [
    { name: "Blocked Content Policy", href: "/" },
    { name: "Community Guidelines", href: "/" },
    { name: "Complaint Policy", href: "/" },
    { name: "Content Removal Policy", href: "/" },
    { name: "Cookie Policy", href: "/" },
    { name: "DMCA Policy", href: "/" },
    { name: "Forum Community Guidelines", href: "/" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms-of-service" },
    { name: "Underage Policy", href: "/" },
];


export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1  flex items-center">
                <Container  >
                    <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
                        {policyLinks.map((item, index: number) => (
                            <Link key={index} href={item.href}>
                                <Card className="w-full px-6 min-h-20 grid place-items-center bg-primary/20  ">
                                    {item.name}
                                </Card>
                            </Link>
                        ))}
                    </div>

                </Container>
            </div>
            <Footer />
        </div>
    );
}