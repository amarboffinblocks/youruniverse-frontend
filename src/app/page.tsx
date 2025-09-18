"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to chat route on page load
    router.push("/chat");
  }, [router]);

  return (
    <div className="flex-1 flex flex-col relative">
      <div className="flex-1">

      </div>
      <Breadcrumb className='flex justify-center py-4  '>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Contact</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage >Attribute Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
