import Header2 from "@/components/layout/header2";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen flex flex-col bg-background">
            <Header2 />
            <main className="relative  flex-1 overflow-y-auto flex flex-col">{children}</main>
        </div>
    );
}