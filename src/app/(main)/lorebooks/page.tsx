

import Footer from "@/components/elements/footer";
import LorebookPage from "@/components/pages/lorebook-page";

export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1">
                <LorebookPage />
            </div>
            <Footer />
        </div>
    );
}
