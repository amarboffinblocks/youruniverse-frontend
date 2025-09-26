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
const LorebookForm: React.FC<Props> = () => {


    return (
        <div className="py-10">
            <form className=" flex gap-x-4">
                <div className="space-y-4">
                    <div className="space-y-2">
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
                            <Label>Lorebook Name</Label>
                            <Field placeholder="Enter the lorebook name" name="lorebookName" />
                        </div>
                        <div className="pt-5">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="rounded-full" >
                                       Lorebook Menu <Menu />
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
                    <div className=" flex  gap-x-4 pb-4">
                            <ToggleSwitch options={[
                                { label: "Private", value: "private" },
                                { label: "Public", value: "public" },
                                { label: "Share", value: "share" },

                            ]} />
                            <ToggleSwitch options={[
                                { label: "NSFW", value: "NSFW" },
                                { label: "SFW", value: "SFW" },
                            ]} />
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                            <SelectElement placeholder="Connect to character" className="w-full" options={[
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
                             <SelectElement placeholder="Connect to persona" className="w-full" options={[
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
                    <div className=" space-y-2 py-2  ">
                        <Label>Choose Tags</Label>
                        <MultiSelect
                            maxCount={5}
                            options={options}
                            onValueChange={(value) => console.log(value)}
                            placeholder="Select tags that best describe your lorebook"
                            singleLine={false}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Keyword or Term</Label>
                        <Field
                            as="textarea"
                            placeholder=""
                            name="Description"
                            tokens={1000}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Context</Label>
                        <Field
                            as="textarea"
                            placeholder=""
                            // errorMessage="invalid field"
                            name="scenario"
                            tokens={1000}
                        />
                    </div>

                </div>

            </form>
        </div>
    );
};

export default LorebookForm;
