
import Container from "@/components/elements/container"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit, Volume2 } from "lucide-react"

const page = () => {
    // Mock character data
    const character = {
        id: "1",
        name: "Astra",
        tagline: "Your cosmic AI companion 🌌",
        description:
            "Astra is an intelligent and curious AI entity who loves exploring the universe and helping you uncover the mysteries of the cosmos.",
        avatar: {
            url: "https://i.imgur.com/Rg8VZ2B.png",
        },
        gender: "Female",
        greeting: "Hey there, stargazer! Ready to explore the galaxies together?",
        created_at: "2025-03-12T10:30:00Z",
        voiceProvider: "ElevenLabs",
        example_dialogues: [
            {
                user: "What's the nearest habitable planet?",
                ai: "That would be Kepler-442b, about 1,200 light-years away — want me to tell you more about it?",
            },
            {
                user: "Can you teach me about constellations?",
                ai: "Of course! Let’s start with Orion — one of the easiest to spot during winter nights.",
            },
        ],
        behaviorPrompt:
            "Astra is friendly, knowledgeable, and deeply fascinated by outer space. She communicates in an enthusiastic and supportive tone, making learning about astronomy fun and exciting.",
        personality_traits: [
            "Curious",
            "Empathetic",
            "Playful",
            "Inquisitive",
            "Supportive",
        ],
    }

    // Helper for date formatting
    const formatRelativeTime = (date: Date) => {
        const diff = (Date.now() - date.getTime()) / 1000
        if (diff < 60) return "just now"
        if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`
        if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`
        return `${Math.floor(diff / 86400)} days ago`
    }

    return (
        <Container className=" h-full flex flex-col"  >

            <div className="flex flex-col h-screen">
                <div className="flex py-4 px-4 items-center justify-end">
                    <Button>
                        <Edit />Edit
                    </Button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="">
                        <div className="grid grid-cols-1 lg:grid-cols-4  gap-6">
                            {/* Left Column */}
                            <div className="space-y-6  col-span-2 ">
                                {/* Character Info Card */}
                                <Card className="transition-shadow py-4">
                                    <CardHeader className="flex flex-row items-start space-x-4 space-y-0">
                                        <Avatar className="h-22 w-22 rounded-full">
                                            <AvatarImage
                                                src="https://github.com/shadcn.png"
                                                alt="@shadcn"
                                                className="object-cover"
                                            />
                                            <AvatarFallback className="rounded-md">
                                                {character.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                             <CardTitle className="text-white/90 text-2xl font-semibold">Tony Stark</CardTitle>
                                            <p className="text-md  pb-1 line-clamp-3 text-gray-300">
                                                {character.tagline}
                                            </p>
                                            <div className="flex gap-2 text-md flex-wrap ">
                                                {["AI", "Chatbot", "NLP", "ML", "Data"].map((tag, idx) => (
                                                    <Badge
                                                        key={idx}
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            {/* <div className="flex items-center text-sm text-gray-300 gap-4 py-1">
                                                <span className="text-xs">
                                                    Created: {formatRelativeTime(new Date(character.created_at))}
                                                </span>
                                            </div> */}
                                        </div>
                                    </CardHeader>
                                </Card>

                                {/* Basic Info */}
                                <Card className="transition-shadow py-4">
                                    <CardHeader>
                                        <CardTitle>Basic Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4 px-6">
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-300">Description</h3>
                                            <p className="text-gray-300 pl-2">{character.description}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-300">Description</h3>
                                            <p className="text-gray-300 pl-2">{character.gender}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-300">Description</h3>
                                            <p className="text-gray-300 pl-2">{character.greeting}</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Voice Settings */}
                                <Card className="transition-shadow py-4">
                                    <CardHeader>
                                        <CardTitle className="flex justify-between items-center">
                                            <span>Voice Settings</span>
                                            <Button variant="ghost" size="sm" className="space-x-2">
                                                <Volume2 className="h-4 w-4" />
                                                <span>Preview</span>
                                            </Button>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground">
                                                Voice Provider
                                            </h3>
                                            <p className="text-foreground">{character.voiceProvider}</p>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-sm font-medium text-muted-foreground">
                                                Voice Preview
                                            </h3>
                                            <div className="flex items-center mt-2">
                                                <span className="text-muted-foreground">🔍️</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6 lg:col-span-2">

                                {/* Personality & Behavior */}
                                <Card className="transition-shadow py-4">
                                    <CardHeader>
                                        <CardTitle>Personality & Behavior</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground">
                                                Behavior Prompt
                                            </h3>
                                            <p className="text-foreground">{character.behaviorPrompt}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground">
                                                Personality Traits
                                            </h3>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {character.personality_traits.map((trait, index) => (
                                                    <Badge key={index} variant="secondary">
                                                        {trait}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default page
