import Footer from "@/components/elements/footer";
import Container from "@/components/elements/container";
import ProfileForm from "@/components/forms/profile-form";
export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1 ">
                <Container className=" max-w-4xl">
                    <ProfileForm />
                </Container>
            </div>
            <Footer />
        </div>
    );
}
