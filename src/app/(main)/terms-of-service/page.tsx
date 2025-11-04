import ComingSoon from "@/components/elements/coming-soon";
import Footer from "@/components/layout/footer";


export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1 text-2xl text-center text-white">
                <ComingSoon />
            </div>
            <Footer />
        </div>
    );
}
