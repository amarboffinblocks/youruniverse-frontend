"use client";
import LandingHeader from "@/components/layout/landing-header";
import LandingFooter from "@/components/layout/landing-footer";

const allBlogs = [
    {
        title: "The Future of Local LLMs",
        excerpt: "Why running AI on your own hardware is the ultimate privacy move.",
        date: "Jan 2, 2025",
        author: "Dev Team",
        category: "Tech"
    },
    {
        title: "Creating Immersive Lorebooks",
        excerpt: "A guide to building deep, consistent worlds for your AI characters.",
        date: "Dec 28, 2024",
        author: "Community",
        category: "Guide"
    },
    {
        title: "Update v1.2.0 Release Notes",
        excerpt: "New character editor features, performance improvements, and more.",
        date: "Dec 15, 2024",
        author: "Engineering",
        category: "Update"
    },
    {
        title: "Creating Immersive Lorebooks",
        excerpt: "A guide to building deep, consistent worlds for your AI characters.",
        date: "Dec 28, 2024",
        author: "Community",
        category: "Guide"
    },
    {
        title: "Update v1.2.0 Release Notes",
        excerpt: "New character editor features, performance improvements, and more.",
        date: "Dec 15, 2024",
        author: "Engineering",
        category: "Update"
    },
    {
        title: "The Art of Character Design",
        excerpt: "Tips and tricks for creating visually stunning and behaviorally complex AI personas.",
        date: "Dec 10, 2024",
        author: "Design Team",
        category: "Design"
    }
];

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen  text-white">
            <LandingHeader simple={true} />
            <main className="flex-1 pt-32 pb-20 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-16 space-y-4">

                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Latest News & Updates
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Stay up to date with the latest features, guides, and community stories from the YourUniverse team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {allBlogs.map((blog, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col p-8 rounded-3xl bg-[#0F111A] border border-white/5 hover:border-white/10 transition-all hover:bg-[#131620]"
                            >
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-400 uppercase tracking-wider">{blog.category}</span>
                                        <span className="text-xs text-gray-500">{blog.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-4">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                </div>
                                <div className="mt-auto pt-6 border-t border-white/5 text-sm font-medium text-gray-500">
                                    By {blog.author}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <LandingFooter />
        </div>
    );
}
