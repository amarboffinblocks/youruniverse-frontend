// 'use client';
// import { Actions, Action } from '@/components/ai-elements/actions';
// import { Message, MessageContent } from '@/components/ai-elements/message';
// import {
//     ZoomableImageModal,
//     ZoomableImageModalTrigger,
//     ZoomableImageModalContent,
// } from "./zoomable-image-modal";

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
// } from "@/components/ui/avatar"
// import {
//     Conversation,
//     ConversationContent,
//     ConversationScrollButton,
// } from '@/components/ai-elements/conversation';

// import { Response } from '@/components/ai-elements/response';
// import { RefreshCcwIcon, CopyIcon, Trash, Info, EllipsisVertical, ArrowRightLeft } from 'lucide-react';
// import { Fragment, useEffect, useRef } from 'react';
// import { Label } from '../ui/label';
// import { Button } from '../ui/button';

// export type MessagePart = {
//     type: "text";   // In the future, you can add "image" | "audio" etc.
//     text: string;
// };

// // Message role types
// export type MessageRole = "user" | "assistant" | "system";

// // Single message structure
// export interface ChatMessage {
//     id: string;
//     role: MessageRole;
//     parts: MessagePart[];
// }

// // Full dummy message array type
// export type ChatMessages = ChatMessage[];

// const dummyMessages: ChatMessages = [
//     {
//         id: '0',
//         role: 'assistant',
//         parts: [{ type: 'text', text: 'Hi, how can I help you.' }],
//     },
//     {
//         id: '1',
//         role: 'user',
//         parts: [{ type: 'text', text: 'Hi, how are you?' }],
//     },
//     {
//         id: '2',
//         role: 'assistant',
//         parts: [{ type: 'text', text: 'I am good, thank you! How can I help you today?,I am good, thank you! How can I help you today?,I am good, thank you! How can I help you today?,I am good, thank you! How can I help you today?' }],
//     },
//     {
//         id: '3',
//         role: 'user',
//         parts: [{ type: 'text', text: 'Can you tell me a joke?' }],
//     },
//     {
//         id: '4',
//         role: 'assistant',
//         parts: [{ type: 'text', text: 'Why did the computer show up at work late? It had a hard drive!' }],
//     },
//     {
//         id: '5',
//         role: 'user',
//         parts: [{ type: 'text', text: 'Haha! That was funny. Can you explain AI in simple words?' }],
//     },
//     {
//         id: '6',
//         role: 'assistant',
//         parts: [{ type: 'text', text: 'Sure! AI is like teaching a computer to learn and make decisions on its own, just like humans do.' }],
//     },
//     {
//         id: '7',
//         role: 'user',
//         parts: [{ type: 'text', text: 'Wow, that’s cool! Can AI write code?' }],
//     },
//     {
//         id: '8',
//         role: 'assistant',
//         parts: [{
//             type: 'text', text: `# Kevin 11  Lorebook

// ## Name
// **Kevin 11** (Kevin Ethan Levin)

// ## Tagline
// *The street-smart antihero who can turn alien DNA and raw matter into his greatest weapon.*

// ## Description
// Kevin 11 is a tall, muscular teenager with black hair and dark brown eyes. Often dressed in dark urban clothing with fingerless gloves and boots, he carries an air of danger mixed with charm. Once a rival to Ben Tennyson, Kevin has walked a rocky path between villainy and heroism. His powers allow him to absorb materials like metal, stone, and wood, as well as alien DNA, transforming his body into various hybrid forms. Though morally flexible and hot-tempered, he’s fiercely loyal to those he trusts.

// ## Abilities
// - Absorption of materials (metal, crystal, stone, wood, etc.)
// - Copying alien powers from the Omnitrix
// - Expert in repairing and modifying alien tech
// - Skilled fighter

// ## Personality
// - Cocky and sarcastic
// - Street-smart and resourceful
// - Hot-tempered but protective
// - Morally ambiguous, evolving toward good

// ## Background
// Raised in harsh conditions, Kevin’s exposure to alien tech led him down a troubled path. He alternates between adversary and ally to Ben and Gwen, with a deep sense of loyalty to his friends despite his rebellious nature.

// ## Relationships
// - **Ben Tennyson:** Frenemy turned ally
// - **Gwen Tennyson:** Close friend and confidante

// ## Tags
//  ` }],
//     },
//     {
//         id: '9',
//         role: 'user',
//         parts: [{ type: 'text', text: 'Can you give me a coding example?' }],
//     },
//     {
//         id: '10',
//         role: 'assistant',
//         parts: [{ type: 'text', text: 'Of course! Here’s a simple JavaScript example: `console.log("Hello, world!");`' }],
//     },
// ];
// interface Props {
//     setPreviewModel: (value: boolean) => void;
// }

// const ChatMessages: React.FC<Props> = ({ }) => {

//     const lastUserMsg = [...dummyMessages].reverse().find(m => m.role === "user");
//     const lastAssistantMsg = [...dummyMessages].reverse().find(m => m.role === "assistant");

//     return (
//         <div className="flex flex-1 p-6 flex-col h-full">
//             <Conversation>
//                 <ConversationContent >
//                     {dummyMessages.map((message, index) => (
//                         <Fragment key={message.id}>
//                             {message?.parts.map((part, i: number) => {
//                                 switch (part.type) {
//                                     case 'text':
//                                         // const isLastMessage =
//                                         //     messageIndex === messages.length - 1;

//                                         return (
//                                             <div key={`${message.id}-${i}`}>
//                                                 {
//                                                     message.role === "assistant" && (
//                                                         <div className='flex items-center gap-2 '>
//                                                             <ZoomableImageModal>
//                                                                 <ZoomableImageModalTrigger >
//                                                                     <Avatar className="cursor-pointer">
//                                                                         <AvatarImage src="https://github.com/shadcn.png" alt="User" />
//                                                                         <AvatarFallback>CN</AvatarFallback>
//                                                                     </Avatar>
//                                                                 </ZoomableImageModalTrigger>

//                                                                 <ZoomableImageModalContent imageUrl="https://avatars.githubusercontent.com/u/124599?v=4" className="rounded-full" />
//                                                             </ZoomableImageModal>
//                                                             <Label className='text-xs'>Tony Stark</Label>
//                                                         </div>
//                                                     )
//                                                 }
//                                                 <Message from={message.role}>
//                                                     <MessageContent>
//                                                         <Response>{part.text}</Response>
//                                                     </MessageContent>
//                                                 </Message>
//                                                 {
//                                                     message.role === "user" && (
//                                                         <Actions className='float-end'>
//                                                             <Action
//                                                                 onClick={() =>
//                                                                     navigator.clipboard.writeText(part.text)
//                                                                 }
//                                                                 label="copy"
//                                                             >
//                                                                 <CopyIcon className="size-3" />
//                                                             </Action>
//                                                             <Action
//                                                                 onClick={() =>
//                                                                     navigator.clipboard.writeText(part.text)
//                                                                 }
//                                                                 label="delete"
//                                                             >
//                                                                 <Trash className="size-3" />
//                                                             </Action>
//                                                             {(message.role === 'user' && lastUserMsg?.id === message.id) &&
//                                                                 <>
//                                                                     <DropdownMenu>
//                                                                         <DropdownMenuTrigger asChild>
//                                                                             <Button
//                                                                                 suppressHydrationWarning
//                                                                                 type='button'
//                                                                                 onClick={() =>
//                                                                                     navigator.clipboard.writeText(part.text)
//                                                                                 }
//                                                                                 size={"icon"}
//                                                                                 className='size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg'
//                                                                             // label="Copyfdsss"
//                                                                             >
//                                                                                 <Info className="size-3" />
//                                                                             </Button>
//                                                                         </DropdownMenuTrigger>
//                                                                         <DropdownMenuContent className="w-56" align="start">
//                                                                             <DropdownMenuItem>
//                                                                                 Edit
//                                                                                 {/* <DropdownMenuShortcut><GitBranch /></DropdownMenuShortcut> */}
//                                                                             </DropdownMenuItem>
//                                                                             <DropdownMenuItem>
//                                                                                 Impresonate
//                                                                             </DropdownMenuItem>
//                                                                             <DropdownMenuItem>
//                                                                                 Persona Perview
//                                                                             </DropdownMenuItem>
//                                                                         </DropdownMenuContent>
//                                                                     </DropdownMenu>
//                                                                     <DropdownMenu>
//                                                                         <DropdownMenuTrigger asChild>
//                                                                             <Button
//                                                                                 suppressHydrationWarning
//                                                                                 type='button'
//                                                                                 onClick={() =>
//                                                                                     navigator.clipboard.writeText(part.text)
//                                                                                 }
//                                                                                 size={"icon"}
//                                                                                 className='size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg'
//                                                                             // label="Copyfdsss"
//                                                                             >
//                                                                                 <EllipsisVertical className="size-3" />
//                                                                             </Button>
//                                                                         </DropdownMenuTrigger>
//                                                                         <DropdownMenuContent className="w-56" align="start">
//                                                                             <DropdownMenuItem>
//                                                                                 Save chat
//                                                                                 {/* <DropdownMenuShortcut><GitBranch /></DropdownMenuShortcut> */}
//                                                                             </DropdownMenuItem>
//                                                                             <DropdownMenuItem>
//                                                                                 Manage saved chat

//                                                                             </DropdownMenuItem>
//                                                                             <DropdownMenuItem>
//                                                                                 Exclude Message from Prompts

//                                                                             </DropdownMenuItem>

//                                                                         </DropdownMenuContent>
//                                                                     </DropdownMenu>
//                                                                 </>
//                                                             }
//                                                         </Actions>
//                                                     )
//                                                 }
//                                                 {message.role === 'assistant' && (
//                                                     <Actions className=''>
//                                                         <Action
//                                                             // onClick={() => regenerate()}
//                                                             label="Retry"
//                                                         >
//                                                             <RefreshCcwIcon className="size-3" />
//                                                         </Action>
//                                                         <Action
//                                                             onClick={() =>
//                                                                 navigator.clipboard.writeText(part.text)
//                                                             }
//                                                             label="Copy"
//                                                         >
//                                                             <CopyIcon className="size-3" />
//                                                         </Action>
//                                                         <Action
//                                                             onClick={() =>
//                                                                 navigator.clipboard.writeText(part.text)
//                                                             }
//                                                             label="delete"
//                                                         >
//                                                             <Trash className="size-3" />
//                                                         </Action>

//                                                         {(message.role == 'assistant') && (lastAssistantMsg?.id === message.id) &&
//                                                             <>
//                                                                 <DropdownMenu>
//                                                                     <DropdownMenuTrigger asChild>
//                                                                         <Button
//                                                                             suppressHydrationWarning
//                                                                             type='button'
//                                                                             onClick={() =>
//                                                                                 navigator.clipboard.writeText(part.text)
//                                                                             }
//                                                                             size={"icon"}
//                                                                             className='size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg'
//                                                                         // label="Copyfdsss"
//                                                                         >
//                                                                             <Info className="size-3" />
//                                                                         </Button>
//                                                                     </DropdownMenuTrigger>
//                                                                     <DropdownMenuContent className="w-56" align="start">
//                                                                         <DropdownMenuItem>
//                                                                             Edit
//                                                                             {/* <DropdownMenuShortcut><GitBranch /></DropdownMenuShortcut> */}
//                                                                         </DropdownMenuItem>
//                                                                         <DropdownMenuItem>
//                                                                             Continue
//                                                                         </DropdownMenuItem>
//                                                                         <DropdownMenuItem>
//                                                                             Impresonate
//                                                                         </DropdownMenuItem>
//                                                                         <DropdownMenuItem>
//                                                                             Author Notes
//                                                                         </DropdownMenuItem>
//                                                                         <DropdownMenuItem>
//                                                                             Character Notes
//                                                                         </DropdownMenuItem>
//                                                                         <DropdownMenuItem>
//                                                                             Character Perview
//                                                                         </DropdownMenuItem>
//                                                                     </DropdownMenuContent>
//                                                                 </DropdownMenu>
//                                                                 <DropdownMenu>
//                                                                     <DropdownMenuTrigger asChild>
//                                                                         <Button
//                                                                             suppressHydrationWarning
//                                                                             type='button'
//                                                                             onClick={() =>
//                                                                                 navigator.clipboard.writeText(part.text)
//                                                                             }
//                                                                             size={"icon"}
//                                                                             className='size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg'
//                                                                         // label="Copyfdsss"
//                                                                         >
//                                                                             <EllipsisVertical className="size-3" />
//                                                                         </Button>
//                                                                     </DropdownMenuTrigger>
//                                                                     <DropdownMenuContent className="w-56" align="start">
//                                                                         <DropdownMenuItem>
//                                                                             Stop

//                                                                         </DropdownMenuItem>
//                                                                         <DropdownMenuItem>
//                                                                             Start new chat

//                                                                         </DropdownMenuItem>
//                                                                         <DropdownMenuItem>
//                                                                             Branch chat

//                                                                         </DropdownMenuItem>
//                                                                         <DropdownMenuItem>
//                                                                             Save chat

//                                                                         </DropdownMenuItem>
//                                                                         <DropdownMenuItem>
//                                                                             Manage saved chat

//                                                                         </DropdownMenuItem>
//                                                                         <DropdownMenuItem>
//                                                                             Exclude Message from Prompts

//                                                                         </DropdownMenuItem>

//                                                                     </DropdownMenuContent>
//                                                                 </DropdownMenu>
//                                                             </>
//                                                         }
//                                                         {message.role === 'assistant' && index === 0 &&
//                                                             <Action
//                                                                 onClick={() =>
//                                                                     navigator.clipboard.writeText(part.text)
//                                                                 }
//                                                                 label="change message"
//                                                             >
//                                                                 <ArrowRightLeft className="size-3" />
//                                                             </Action>

//                                                         }
//                                                     </Actions>
//                                                 )}
//                                             </div>
//                                         );
//                                     default:
//                                         return null;
//                                 }
//                             })}
//                         </Fragment>
//                     ))}
//                 </ConversationContent>
//                 <ConversationScrollButton />
//             </Conversation>


//         </div>
//     );
// };

// export default ChatMessages;






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
import { useAutoScroll } from '../hooks/use-auto-scroll';

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

// Extract common action handlers
const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text).catch(console.error);
};

// Extract common dropdown menu items for reusability
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

// Extract common action buttons for better reusability
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

// Extract dropdown components for better readability
const InfoDropdown = ({ items }: { items: { label: string }[] }) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
                type="button"
                size="icon"
                className="size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg"
            >
                <Info className="size-3" />
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
    const { containerRef, isAutoScrollEnabled, scrollToBottom } = useAutoScroll([dummyMessages]);
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

        return (
            <Actions className="float-end">
                <CommonActions
                    onCopy={() => handleCopyText(text)}
                    onDelete={() => handleCopyText(text)} // TODO: Replace with actual delete handler
                />
                {isLastUserMessage && (
                    <>
                        <InfoDropdown items={CommonDropdownItems.user} />
                        <MoreDropdown items={CommonDropdownItems.more} />
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
                    onDelete={() => handleCopyText(text)} // TODO: Replace with actual delete handler
                />
                {isLastAssistantMessage && (
                    <>
                        <InfoDropdown items={CommonDropdownItems.assistant} />
                        <MoreDropdown items={CommonDropdownItems.assistantMore} />
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
    }, [dummyMessages]);
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