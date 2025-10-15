
import Footer from "@/components/elements/footer";
import CharacterPage from "@/components/pages/character-page";


export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1 ">
                <CharacterPage />
            </div>
            <Footer />
        </div>
    );
}
