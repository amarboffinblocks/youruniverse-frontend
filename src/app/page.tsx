"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/elements/footer";
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
      <Footer/>
    </div>
  );
}
