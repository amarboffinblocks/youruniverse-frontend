"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbElements = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);

    // Function to format labels (remove dashes, capitalize)
    const formatLabel = (segment: string) => {
        return segment
            .replace(/-/g, " ") // replace dashes with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize first letters
    };

    const breadcrumbs = pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        return {
            label: formatLabel(segment),
            href,
            isLast: index === pathSegments.length - 1,
        };
    });

    return (
        <Breadcrumb className="flex justify-center py-4">
            <BreadcrumbList>
                {/* Home link always */}
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbs.map((crumb) => (
                    <React.Fragment key={crumb.href}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {crumb.isLast ? (
                                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link href={crumb.href}>{crumb.label}</Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadcrumbElements;
