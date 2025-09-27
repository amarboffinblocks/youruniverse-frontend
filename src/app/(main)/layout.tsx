import Header from "@/components/layout/header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen flex flex-col bg-background">
            <Header />
            <main className="relative  flex-1 overflow-y-auto flex flex-col">{children}</main>
        </div>
    );
}