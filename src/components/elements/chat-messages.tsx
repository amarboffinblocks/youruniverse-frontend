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
    DropdownMenuShortcut,
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
import { RefreshCcwIcon, CopyIcon, Trash, Info, EllipsisVertical, SquarePen, GitBranch, ArrowRightLeft, ArrowRightLeftIcon } from 'lucide-react';
import { Fragment } from 'react';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export type MessagePart = {
    type: "text";   // In the future, you can add "image" | "audio" etc.
    text: string;
};

// Message role types
export type MessageRole = "user" | "assistant" | "system";

// Single message structure
export interface ChatMessage {
    id: string;
    role: MessageRole;
    parts: MessagePart[];
}

// Full dummy message array type
export type ChatMessages = ChatMessage[];

const dummyMessages: ChatMessages = [
    {
        id: '0',
        role: 'assistant',
        parts: [{ type: 'text', text: 'Hi, how can I help you.' }],
    },
    {
        id: '1',
        role: 'user',
        parts: [{ type: 'text', text: 'Hi, how are you?' }],
    },
    {
        id: '2',
        role: 'assistant',
        parts: [{ type: 'text', text: 'I am good, thank you! How can I help you today?,I am good, thank you! How can I help you today?,I am good, thank you! How can I help you today?,I am good, thank you! How can I help you today?' }],
    },
    {
        id: '3',
        role: 'user',
        parts: [{ type: 'text', text: 'Can you tell me a joke?' }],
    },
    {
        id: '4',
        role: 'assistant',
        parts: [{ type: 'text', text: 'Why did the computer show up at work late? It had a hard drive!' }],
    },
    {
        id: '5',
        role: 'user',
        parts: [{ type: 'text', text: 'Haha! That was funny. Can you explain AI in simple words?' }],
    },
    {
        id: '6',
        role: 'assistant',
        parts: [{ type: 'text', text: 'Sure! AI is like teaching a computer to learn and make decisions on its own, just like humans do.' }],
    },
    {
        id: '7',
        role: 'user',
        parts: [{ type: 'text', text: 'Wow, that’s cool! Can AI write code?' }],
    },
    {
        id: '8',
        role: 'assistant',
        parts: [{
            type: 'text', text: `# Kevin 11  Lorebook
 
## Name
**Kevin 11** (Kevin Ethan Levin)
 
## Tagline
*The street-smart antihero who can turn alien DNA and raw matter into his greatest weapon.*
 
## Description
Kevin 11 is a tall, muscular teenager with black hair and dark brown eyes. Often dressed in dark urban clothing with fingerless gloves and boots, he carries an air of danger mixed with charm. Once a rival to Ben Tennyson, Kevin has walked a rocky path between villainy and heroism. His powers allow him to absorb materials like metal, stone, and wood, as well as alien DNA, transforming his body into various hybrid forms. Though morally flexible and hot-tempered, he’s fiercely loyal to those he trusts.
 
## Abilities
- Absorption of materials (metal, crystal, stone, wood, etc.)
- Copying alien powers from the Omnitrix
- Expert in repairing and modifying alien tech
- Skilled fighter
 
## Personality
- Cocky and sarcastic
- Street-smart and resourceful
- Hot-tempered but protective
- Morally ambiguous, evolving toward good
 
## Background
Raised in harsh conditions, Kevin’s exposure to alien tech led him down a troubled path. He alternates between adversary and ally to Ben and Gwen, with a deep sense of loyalty to his friends despite his rebellious nature.
 
## Relationships
- **Ben Tennyson:** Frenemy turned ally
- **Gwen Tennyson:** Close friend and confidante
 
## Tags
 ` }],
    },
    {
        id: '9',
        role: 'user',
        parts: [{ type: 'text', text: 'Can you give me a coding example?' }],
    },
    {
        id: '10',
        role: 'assistant',
        parts: [{ type: 'text', text: 'Of course! Here’s a simple JavaScript example: `console.log("Hello, world!");`' }],
    },
];

const ChatMessages = () => {
    // const [messages, setMessages] = useState(dummyMessages)

    return (
        <div className="flex flex-1 p-6 flex-col h-full">
            <Conversation>
                <ConversationContent>
                    {dummyMessages.map((message) => (
                        <Fragment key={message.id}>
                            {message?.parts.map((part, i: number) => {
                                switch (part.type) {
                                    case 'text':
                                        // const isLastMessage =
                                        //     messageIndex === messages.length - 1;

                                        return (
                                            <div key={`${message.id}-${i}`}>
                                                {
                                                    message.role === "assistant" && (
                                                        <div className='flex items-center gap-2 '>
                                                            <ZoomableImageModal>
                                                                <ZoomableImageModalTrigger >
                                                                    <Avatar className="cursor-pointer">
                                                                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                                                                        <AvatarFallback>CN</AvatarFallback>
                                                                    </Avatar>
                                                                </ZoomableImageModalTrigger>

                                                                <ZoomableImageModalContent imageUrl="https://avatars.githubusercontent.com/u/124599?v=4" className="rounded-full" />
                                                            </ZoomableImageModal>
                                                            <Label className='text-xs'>Tony Stark</Label>
                                                        </div>
                                                    )
                                                }
                                                <Message from={message.role}>
                                                    <MessageContent>
                                                        <Response>{part.text}</Response>
                                                    </MessageContent>
                                                </Message>
                                                {
                                                    message.role === "user" && (
                                                        <Actions className='float-end'>
                                                            <Action
                                                                onClick={() =>
                                                                    navigator.clipboard.writeText(part.text)
                                                                }
                                                                label="copy"
                                                            >
                                                                <CopyIcon className="size-3" />
                                                            </Action>
                                                            <Action
                                                                onClick={() =>
                                                                    navigator.clipboard.writeText(part.text)
                                                                }
                                                                label="delete"
                                                            >
                                                                <Trash className="size-3" />
                                                            </Action>
                                                                <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    suppressHydrationWarning
                                                                    type='button'
                                                                    onClick={() =>
                                                                        navigator.clipboard.writeText(part.text)
                                                                    }
                                                                    size={"icon"}
                                                                    className='size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg'
                                                                // label="Copyfdsss"
                                                                >
                                                                    <Info className="size-3" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56" align="start">
                                                                <DropdownMenuItem>
                                                                    Edit
                                                                    {/* <DropdownMenuShortcut><GitBranch /></DropdownMenuShortcut> */}
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Impresonate
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Narrate
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Persona Perview
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    suppressHydrationWarning
                                                                    type='button'
                                                                    onClick={() =>
                                                                        navigator.clipboard.writeText(part.text)
                                                                    }
                                                                    size={"icon"}
                                                                    className='size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg'
                                                                // label="Copyfdsss"
                                                                >
                                                                    <EllipsisVertical className="size-3" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56" align="start">
                                                                <DropdownMenuItem>
                                                                    Save chat
                                                                    {/* <DropdownMenuShortcut><GitBranch /></DropdownMenuShortcut> */}
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Manage saved chat

                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Exclude Message from Prompts

                                                                </DropdownMenuItem>

                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                        </Actions>
                                                    )
                                                }
                                                {message.role === 'assistant' && (
                                                    <Actions className=''>
                                                        <Action
                                                            // onClick={() => regenerate()}
                                                            label="Retry"
                                                        >
                                                            <RefreshCcwIcon className="size-3" />
                                                        </Action>
                                                        <Action
                                                            onClick={() =>
                                                                navigator.clipboard.writeText(part.text)
                                                            }
                                                            label="Copy"
                                                        >
                                                            <CopyIcon className="size-3" />
                                                        </Action>
                                                        <Action
                                                            onClick={() =>
                                                                navigator.clipboard.writeText(part.text)
                                                            }
                                                            label="delete"
                                                        >
                                                            <Trash className="size-3" />
                                                        </Action>

                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    suppressHydrationWarning
                                                                    type='button'
                                                                    onClick={() =>
                                                                        navigator.clipboard.writeText(part.text)
                                                                    }
                                                                    size={"icon"}
                                                                    className='size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg'
                                                                // label="Copyfdsss"
                                                                >
                                                                    <Info className="size-3" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56" align="start">
                                                                <DropdownMenuItem>
                                                                    Edit
                                                                    {/* <DropdownMenuShortcut><GitBranch /></DropdownMenuShortcut> */}
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Continue
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Impresonate
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Narrate
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Author Notes
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Character Notes
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Character Perview
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    suppressHydrationWarning
                                                                    type='button'
                                                                    onClick={() =>
                                                                        navigator.clipboard.writeText(part.text)
                                                                    }
                                                                    size={"icon"}
                                                                    className='size-7 p-1.5 bg-primary/30 backdrop-blur-3xl rounded-lg'
                                                                // label="Copyfdsss"
                                                                >
                                                                    <EllipsisVertical className="size-3" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56" align="start">
                                                                <DropdownMenuItem>
                                                                    Stop
                                                                    {/* <DropdownMenuShortcut><GitBranch /></DropdownMenuShortcut> */}
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Start new chat

                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Branch chat

                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Save chat

                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Manage saved chat

                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    Exclude Message from Prompts

                                                                </DropdownMenuItem>

                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                        <Action
                                                            onClick={() =>
                                                                navigator.clipboard.writeText(part.text)
                                                            }
                                                            label="delete"
                                                        >
                                                            <ArrowRightLeft className="size-3" />
                                                        </Action>
                                                    </Actions>
                                                )}
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            })}
                        </Fragment>
                    ))}
                </ConversationContent>
                <ConversationScrollButton />
            </Conversation>


        </div>
    );
};

export default ChatMessages;