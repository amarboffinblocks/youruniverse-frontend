"use client"
import React from "react";
import Field from "../elements/form-elements/field";
import { Label } from "../ui/label";
import ImageUpload from "../elements/form-elements/image-upload"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { Menu, Copy, Link as LinkIcon, Trash2, Upload, Download, Folder, RotateCcw } from "lucide-react";
import MessageListManager from "../elements/form-elements/message-list-manager";
import SelectElement from "../elements/select-element";
import { ToggleSwitch } from "../elements/toggle-switch";
import { MultiSelect } from "../ui/multi-select";
interface Props {
    characterId?: string;
}
const options = [
    { label: "Creative", value: "creative" },
    { label: "Funny", value: "funny" },
    { label: "Serious", value: "serious" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Sci-Fi", value: "sci-fi" },
    { label: "Friendly", value: "friendly" },
    { label: "Professional", value: "professional" },
    { label: "Adventurous", value: "adventurous" },
    { label: "Mysterious", value: "mysterious" },
    { label: "Brave", value: "brave" },
    { label: "Intelligent", value: "intelligent" },
    { label: "Curious", value: "curious" },
    { label: "Kind", value: "kind" },
    { label: "Charming", value: "charming" },
    { label: "Heroic", value: "heroic" }
];
const CharacterForm: React.FC<Props> = () => {


    return (
        <div className="py-10">
            <form className=" flex gap-x-4">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <ImageUpload errorMessage="invalid image" />
                    </div>
                    <div>
                        <ImageUpload />
                    </div>

                    <div className="bg-primary/30 backdrop-blur-3xl rounded-2xl flex items-center  flex-col p-2 ">
                        <Label className="text-center">Total Tokens</Label>
                        <span className="text-sm text-muted">20000k</span>
                    </div>

                </div>

                <div className=" flex-1 space-y-2">
                    <div className="flex gap-x-2  ">
                        <div className="space-y-2 flex-1">
                            <Label>Character Name</Label>
                            <Field placeholder="Enter the character's name" name="characterName" />
                        </div>
                        <div className="pt-5">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="rounded-full" >
                                        Character Menu <Menu />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="w-64" align="end">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Duplicate
                                            <DropdownMenuShortcut><Copy className="size-4" /></DropdownMenuShortcut>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            Link to Account
                                            <DropdownMenuShortcut><LinkIcon className="size-4" /></DropdownMenuShortcut>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            Clear All Fields
                                            <DropdownMenuShortcut><RotateCcw className="size-4" /></DropdownMenuShortcut>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            Import
                                            <DropdownMenuShortcut><Upload className="size-4" /></DropdownMenuShortcut>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            Export
                                            <DropdownMenuShortcut><Download className="size-4" /></DropdownMenuShortcut>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            Link to Folder
                                            <DropdownMenuShortcut><Folder className="size-4" /></DropdownMenuShortcut>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem variant="destructive" >
                                            Delete
                                            <DropdownMenuShortcut><Trash2 className="size-4 text-destructive" /></DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                    </div>
                    <div className=" grid grid-cols-2 gap-x-4 py-2">
                        <div className="flex gap-x-4">
                            <ToggleSwitch options={[
                                { label: "Private", value: "private" },
                                { label: "Public", value: "public" },
                            ]} />
                            <ToggleSwitch options={[
                                { label: "NSFW", value: "NSFW" },
                                { label: "SFW", value: "SFW" },
                            ]} />

                        </div>
                        <div className="">
                            <SelectElement placeholder="select a lorebook" className="w-full" options={[
                                {
                                    value: "luna-ai",
                                    label: "Luna AI",
                                },
                                {
                                    value: "astro-bot",
                                    label: "Astro Bot",
                                },
                                {
                                    value: "neo-guide",
                                    label: "Neo Guide",
                                },
                                {
                                    value: "zara-mentor",
                                    label: "Zara Mentor",
                                }
                            ]} />
                        </div>
                    </div>
                    <div className=" space-y-2 py-2  ">
                        <Label>Choose Character Tags</Label>
                        <MultiSelect
                            maxCount={5}
                            options={options}
                            onValueChange={(value) => console.log(value)}
                            placeholder="Select tags that best describe your character"
                            singleLine={false}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Field
                            as="textarea"
                            placeholder="Describe your character's background, story, or key traits"
                            name="Description"
                            tokens={1000}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Scenario</Label>
                        <Field
                            as="textarea"
                            placeholder="Describe the scenario or background story"
                            errorMessage="invalid field"
                            name="scenario"
                            tokens={1000}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Personality Summary</Label>
                        <Field
                            as="textarea"
                            placeholder="Write a short summary of the character's personality"
                            name="personalitySummary"
                            tokens={1000}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>First Message</Label>
                        <Field
                            as="textarea"
                            placeholder="Write the character's first message"
                            name="firstMessage"
                            tokens={1000}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Alternative First Message</Label>
                        <MessageListManager
                            initialMessages={["How can I help you?", "Hello!"]}
                            placeholder="Enter Alternative first message"
                            onChange={(value) => console.log(value)}

                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Example Dialogue</Label>
                        <Field
                            as="textarea"
                            placeholder="Provide example dialogues for better context"
                            name="exampleDialogue"
                            tokens={1000}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Author Notes</Label>
                        <Field
                            as="textarea"
                            placeholder="Add notes or instructions for the character"
                            name="authorNotes"
                            tokens={1000}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Character Notes</Label>
                        <Field
                            as="textarea"
                            placeholder="Add any additional details about the character"
                            name="characterNotes"
                        />
                    </div>

                </div>

            </form>
        </div>
    );
};

export default CharacterForm;
