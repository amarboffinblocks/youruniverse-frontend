
import ComingSoon from "@/components/elements/coming-soon";
import Container from "@/components/elements/container";
import Footer from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const policyLinks = [
  { name: "Blocked Content", href: "/" },
  { name: "Community Guidelines", href: "/" },
  { name: "Complaint Policy", href: "/" },
  { name: "Content Removal Policy", href: "/" },
  { name: "Cookie Policy", href: "/" },
  { name: "DMCA Policy", href: "/" },
  { name: "Forum Community Guidelines", href: "/" },
  { name: "Privacy Policy", href: "/" },
  { name: "Terms of Service", href: "/" },
  { name: "Underage Policy", href: "/" },
];


export default function page() {
    return (
   <div className="flex-1 flex flex-col relative">
            <div className="flex-1 items-center flex">
              <Container className="bg-red-500 ">
                <div className="grid grid-cols-4 gap-6 h-fit w-full">
                {policyLinks.map((item,index:number)=>(
                    <Card key={index} className="w-full px-6 min-h-20 grid place-items-center ">
                     {item.name}
                    </Card>
                ))}
                </div>
               
              </Container>
            </div>
            <Footer />
        </div>
    );
}
