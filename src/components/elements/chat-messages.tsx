
'use client';
import { Actions, Action } from '@/components/ai-elements/actions';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
    ZoomableImageModal,
    ZoomableImageModalTrigger,
    ZoomableImageModalContent,
} from "./zoomable-image-modal";



import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Conversation,
    ConversationContent,
    ConversationScrollButton,
} from '@/components/ai-elements/conversation';

import { Response } from '@/components/ai-elements/response';
import { RefreshCcwIcon, CopyIcon, Trash, Info, EllipsisVertical, ArrowRightLeft } from 'lucide-react';
import { Fragment, useEffect, useMemo, useRef } from 'react';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { ZoomableDialog, ZoomableDialogContent, ZoomableDialogTrigger } from './zoomable-dialog';
import DynamicForm from './form-elements/dynamic-form';
import { characterPreviewSchema } from '@/schemas/character-preview-schema';
import { personaPreviewSchema } from '@/schemas/persona-preview-schema';

export type MessagePart = {
    type: "text";
    text: string;
};

export type MessageRole = "user" | "assistant" | "system";

export interface ChatMessage {
    id: string;
    role: MessageRole;
    parts: MessagePart[];
}

export type ChatMessages = ChatMessage[];

const dummyMessages: ChatMessages = [
    {
        id: "0",
        role: "assistant",
        parts: [{ type: "text", text: "Hi there! How can I assist you today?" }],
    },
    {
        id: "1",
        role: "user",
        parts: [{ type: "text", text: "Hello! How are you?" }],
    },
    {
        id: "2",
        role: "assistant",
        parts: [{ type: "text", text: "I'm doing great! Thanks for asking. How can I help you today?" }],
    },
    {
        id: "3",
        role: "user",
        parts: [{ type: "text", text: "Tell me something interesting." }],
    },
    {
        id: "4",
        role: "assistant",
        parts: [{ type: "text", text: "Did you know honey never spoils? Archaeologists found 3000-year-old honey still edible!" }],
    },
    {
        id: "5",
        role: "user",
        parts: [{ type: "text", text: "Haha that's cool! Can you tell me a joke?" }],
    },
    {
        id: "6",
        role: "assistant",
        parts: [{ type: "text", text: "Sure! Why did the developer go broke? Because he used up all his cache." }],
    },
    {
        id: "7",
        role: "user",
        parts: [{ type: "text", text: "Nice one! What is AI in simple words?" }],
    },
    {
        id: "8",
        role: "assistant",
        parts: [{ type: "text", text: "AI is like teaching a computer to think, learn, and solve problems like humans do." }],
    },
    {
        id: "9",
        role: "user",
        parts: [{ type: "text", text: "Great! Can AI write code?" }],
    },
    {
        id: "10",
        role: "assistant",
        parts: [{ type: "text", text: "Yes! AI can generate, optimize, and explain code. It helps developers work faster." }],
    },
    {
        id: "11",
        role: "user",
        parts: [{ type: "text", text: "Show me a small example in JavaScript." }],
    },
    {
        id: "12",
        role: "assistant",
        parts: [{ type: "text", text: "Here you go: `console.log('Hello from AI!')`" }],
    },
    {
        id: "13",
        role: "user",
        parts: [{ type: "text", text: "Thanks! How do I center a div in CSS?" }],
    },
    {
        id: "14",
        role: "assistant",
        parts: [{ type: "text", text: "Use flexbox:\ndiv { display: flex; justify-content: center; align-items: center; }" }],
    },
    {
        id: "15",
        role: "user",
        parts: [{ type: "text", text: "What’s the difference between let and const?" }],
    },
    {
        id: "16",
        role: "assistant",
        parts: [{ type: "text", text: "Use **const** for values that don’t change. Use **let** when you need to reassign the variable." }],
    },
    {
        id: "17",
        role: "user",
        parts: [{ type: "text", text: "What is Next.js used for?" }],
    },
    {
        id: "18",
        role: "assistant",
        parts: [{ type: "text", text: "Next.js is a React framework for building fast, SEO-friendly websites and apps." }],
    },
    {
        id: "19",
        role: "user",
        parts: [{ type: "text", text: "Awesome! Give me one more joke." }],
    },
    {
        id: "20",
        role: "assistant",
        parts: [{ type: "text", text: "Why was the JavaScript developer sad? Because he didn’t know how to ‘null’ his feelings." }],
    },
];

interface ChatMessagesProps {
    setPreviewModel: (value: boolean) => void;
}

const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text).catch(console.error);
};

const CommonDropdownItems = {
    user: [
        { label: 'Edit' },
        { label: 'Impersonate' },
        { label: 'Persona Preview' },
    ],
    assistant: [
        { label: 'Edit' },
        { label: 'Continue' },
        { label: 'Impersonate' },
        { label: 'Author Notes' },
        { label: 'Character Notes' },
        { label: 'Character Preview' },
    ],
    more: [
        { label: 'Save chat' },
        { label: 'Exclude Message from Prompts' },
    ],
    assistantMore: [
        { label: 'Stop' },
        { label: 'Start new chat' },
        { label: 'Branch chat' },
        { label: 'Save chat' },
        { label: 'Exclude Message from Prompts' },
    ],
};

const CommonActions = ({ onCopy, onDelete }: { onCopy: () => void; onDelete: () => void }) => (
    <>
        <Action onClick={onCopy} label="copy">
            <CopyIcon className="size-3" />
        </Action>
        <Action onClick={onDelete} label="delete">
            <Trash className="size-3" />
        </Action>
    </>
);

// const InfoDropdown = ({ items }: { items: { label: string }[] }) => (
//     <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//             <Button
//                 type="button"
//                 size="icon"
//                 className="size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg"
//             >
//                 <Info className="size-3" />
//             </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-56" align="start">
//             {items.map((item, index) => (
//                 <DropdownMenuItem key={index}>
//                     {item.label}
//                 </DropdownMenuItem>
//             ))}
//         </DropdownMenuContent>
//     </DropdownMenu>
// );

const MoreDropdown = ({ items }: { items: { label: string }[] }) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
                type="button"
                size="icon"
                className="size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg"
            >
                <EllipsisVertical className="size-3" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
            {items.map((item, index) => (
                <DropdownMenuItem key={index}>
                    {item.label}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
);



const ChatMessages: React.FC<ChatMessagesProps> = () => {
    // Memoize the last messages to avoid recalculating on every render
    const { lastUserMsg, lastAssistantMsg } = useMemo(() => {
        const reversedMessages = [...dummyMessages].reverse();
        return {
            lastUserMsg: reversedMessages.find(m => m.role === "user"),
            lastAssistantMsg: reversedMessages.find(m => m.role === "assistant"),
        };
    }, []);

    const renderMessageHeader = (message: ChatMessage) => {
        if (message.role !== "assistant") return null;

        return (
            <div className="flex items-center gap-2 mb-2">
                <ZoomableImageModal>
                    <ZoomableImageModalTrigger>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" alt="Assistant" />
                            <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                    </ZoomableImageModalTrigger>
                    <ZoomableImageModalContent
                        imageUrl="https://avatars.githubusercontent.com/u/124599?v=4"
                        className="rounded-full"
                    />
                </ZoomableImageModal>
                <Label className="text-xs">Tony Stark</Label>
            </div>
        );
    };

    const renderUserActions = (message: ChatMessage, text: string, index: number) => {
        const isLastUserMessage = lastUserMsg?.id === message.id;
   console.log(index)
        return (
            <Actions className="float-end">
                <CommonActions
                    onCopy={() => handleCopyText(text)}
                    onDelete={() => handleCopyText(text)} // TODO: Replace with actual delete handler
                />
                {isLastUserMessage && (
                    <>
                        {/* <InfoDropdown items={CommonDropdownItems.user} /> */}
                        <MoreDropdown items={CommonDropdownItems.more} />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    suppressHydrationWarning
                                    type="button"
                                    size={"icon"}
                                    className="size-7 p-1.5 bg-primary/30 ckdrop-blur-3xl rounded-lg"
                                >
                                    <Info className="size-3" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-56" align="start">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Impresonate</DropdownMenuItem>


                                <ZoomableDialog >
                                    <ZoomableDialogTrigger asChild>
                                        <DropdownMenuItem
                                            onSelect={(e) => e.preventDefault()}
                                        >
                                            Persona Preview
                                        </DropdownMenuItem>
                                    </ZoomableDialogTrigger>

                                    <ZoomableDialogContent className='!max-w-4xl'>
                                            <DynamicForm
                                                button={false}
                                                schema={personaPreviewSchema}
                                                onSubmit={(values) => {
                                                    console.log("Form Submitted:", values);
                                                }}
                                                initialValues={{

                                                    name: "Luna AI",
                                                    tags: ["ai", "assistant", "friendly"],
                                                    lorebook: "luna-ai",
                                                    details:
                                                        "Luna AI is a friendly and adaptive conversational companion designed to assist users with creative and technical discussions.",

                                                }}
                                            />
                                    </ZoomableDialogContent>
                                </ZoomableDialog>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                )}
            </Actions>
        );
    };

    const renderAssistantActions = (message: ChatMessage, text: string, index: number) => {
        const isLastAssistantMessage = lastAssistantMsg?.id === message.id;
        const isFirstMessage = index === 0;

        return (
            <Actions>
                <Action label="Retry">
                    <RefreshCcwIcon className="size-3" />
                </Action>
                <CommonActions
                    onCopy={() => handleCopyText(text)}
                    onDelete={() => handleCopyText(text)}
                />
                {isLastAssistantMessage && (
                    <>
                        {/* <InfoDropdown items={CommonDropdownItems.assistant} /> */}
                        <MoreDropdown items={CommonDropdownItems.assistantMore} />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    suppressHydrationWarning
                                    type="button"
                                    size={"icon"}
                                    className="size-7 p-1.5 bg-primary/30 ckdrop-blur-3xl rounded-lg"
                                >
                                    <Info className="size-3" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-56" align="start">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Continue</DropdownMenuItem>
                                <DropdownMenuItem>Impresonate</DropdownMenuItem>
                                <DropdownMenuItem>Author Notes</DropdownMenuItem>
                                <DropdownMenuItem>Character Notes</DropdownMenuItem>


                                <ZoomableDialog >
                                    <ZoomableDialogTrigger asChild>
                                        <DropdownMenuItem
                                            onSelect={(e) => e.preventDefault()}
                                        >
                                            Character Preview
                                        </DropdownMenuItem>
                                    </ZoomableDialogTrigger>

                                    <ZoomableDialogContent className='!max-w-4xl'>
                                            <DynamicForm
                                                button={false}
                                                schema={characterPreviewSchema}
                                                onSubmit={(values) => {
                                                    console.log("Form Submitted:", values);
                                                }}
                                                initialValues={{
                                                    characterName: "Luna AI",
                                                    visiable: "private",
                                                    rating: "SFW",
                                                    linkToLorebook: "luna-ai",
                                                    linkToPersona: "astro-bot",
                                                    tags: ["ai", "assistant", "friendly"],
                                                    description:
                                                        "Luna AI is a friendly and adaptive conversational companion designed to assist users with creative and technical discussions.",
                                                    scenario:
                                                        "You are chatting with Luna AI in a cozy futuristic workspace.",
                                                    personalitySummary:
                                                        "Curious, kind, and intelligent with a playful tone.",
                                                    firstMessage:
                                                        "Hello! I’m Luna. How can I brighten your day today?",
                                                    alternateMessages: [
                                                        "Hey there! How are you doing today?",
                                                        "Hi! Ready to explore something fun?",
                                                    ],
                                                    exampleDialogue:
                                                        "<START>\nUser: What's your favorite color?\nLuna: I’d say blue — calm and thoughtful, like a clear sky!",
                                                    authorNotes:
                                                        "Created for testing AI personality behavior and tone.",
                                                    characterNotes:
                                                        "Luna AI adapts tone and depth based on user engagement.",
                                                }}
                                            />
                                    </ZoomableDialogContent>
                                </ZoomableDialog>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </>
                )}

                {isFirstMessage && (
                    <Action label="change message">
                        <ArrowRightLeft className="size-3" />
                    </Action>
                )}
            </Actions>
        );
    };
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);
    return (
        <div className="flex flex-1 p-6 flex-col h-full relative ">
            <Conversation className='h-full'>
                <ConversationContent className='flex-1 overflow-auto' >
                    {dummyMessages.map((message, index) => (
                        <Fragment key={message.id}>
                            {renderMessageHeader(message)}
                            {message.parts.map((part, partIndex) => (
                                <Fragment key={`${message.id}-${partIndex}`}>
                                    {part.type === 'text' && (
                                        <>
                                            <Message from={message.role}>
                                                <MessageContent>
                                                    <Response>{part.text}</Response>
                                                </MessageContent>
                                            </Message>
                                            {message.role === "user"
                                                ? renderUserActions(message, part.text, index)
                                                : renderAssistantActions(message, part.text, index)
                                            }
                                        </>
                                    )}
                                </Fragment>
                            ))}
                        </Fragment>
                    ))}
                    <div ref={bottomRef} />
                </ConversationContent>
                <ConversationScrollButton />
            </Conversation>

        </div>
    );
};

export default ChatMessages;
