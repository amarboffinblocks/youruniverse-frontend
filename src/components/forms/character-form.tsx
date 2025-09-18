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
import ToggleButton from "../elements/toggle-button";
import SelectElement from "../elements/select-element";
interface Props {
    characterId?: string;
}

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
                    <div className="flex gap-x-2 items-center ">
                        <div className="space-y-2 flex-1">
                            <Label>Character Name</Label>
                            <Field placeholder="Enter the character's name" name="characterName" tokens={1000} />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="rounded-xl" >
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
                    <div className=" grid grid-cols-3 gap-x-4 py-2">
                        <div className="flex gap-x-4">
                            <ToggleButton
                                defaultChecked={true}
                                labelOn="Public"
                                labelOff="Private"
                                onToggle={(state) => console.log("Current state:", state)}
                            />
                            <ToggleButton
                                defaultChecked={true}
                                labelOn="SFW"
                                labelOff="NSFW"
                                onToggle={(state) => console.log("Current state:", state)}
                            />

                        </div>
                        <SelectElement className="w-full" placeholder="select a persona" options={[
                            { value: "purple", label: "Dark Purple" },
                            { value: "white", label: "White" },
                            { value: "yellow", label: "Yellow" },
                            { value: "grapes", label: "Grapes" },
                            { value: "pineapple", label: "Pineapple" },
                        ]} />
                        <SelectElement placeholder="select a lorebook" className="w-full" options={[
                            { value: "purple", label: "Dark Purple" },
                            { value: "white", label: "White" },
                            { value: "yellow", label: "Yellow" },
                            { value: "grapes", label: "Grapes" },
                            { value: "pineapple", label: "Pineapple" },
                        ]} />
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
                </div>

            </form>
        </div>
    );
};

export default CharacterForm;
