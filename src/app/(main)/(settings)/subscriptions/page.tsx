
import BreadcrumbElements from "@/components/elements/breadcrumb-elements";
import ComingSoon from "@/components/elements/coming-soon";


export default function page() {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1 ">
                <ComingSoon />
            </div>
            <BreadcrumbElements />
        </div>
    );
}
