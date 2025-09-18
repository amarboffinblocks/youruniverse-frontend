import Header from "@/components/layout/header";
import StarAnimation from "@/components/elements/star-animation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen flex flex-col bg-background">
            <StarAnimation />
            <Header />
            <main className="relative  flex-1 overflow-y-auto flex flex-col">{children}</main>
        </div>
    );
}
