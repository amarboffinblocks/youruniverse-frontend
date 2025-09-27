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
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { Menu, Trash2 } from "lucide-react";
import { Switch } from "../ui/switch";
import SelectElement from "../elements/select-element";
import { ToggleSwitch } from "../elements/toggle-switch";
interface Props {
    characterId?: string;
}

const ProfileForm: React.FC<Props> = () => {


    // const handleChange = () => {

    // }



    return (
        <div className="py-10">
            <form className=" flex gap-x-4">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <ImageUpload />
                    </div>
                </div>

                <div className=" flex-1 space-y-2">
                    <div className="flex gap-x-2 ">
                        <div className="space-y-2 flex-1">
                            <Label>Username</Label>
                            <Field placeholder="Enter your username" name="characterName" showCopyButton={true} />
                        </div>
                        <div className="mt-5.5">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button >
                                        Account Menu <Menu />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent align="end">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Change Username <span className="ml-auto text-xs text-muted-foreground">(once every 24 hours)</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Change / Update Email <span className="ml-auto text-xs text-muted-foreground">(once every 24 hours)</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Change / Update Password
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>

                                    <DropdownMenuSeparator />

                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Bulk Export Your Universe
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

                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Field
                            type="email"
                            placeholder="Enter your email"
                            name="scenario"
                            showCopyButton={true}
                        />
                    </div>
                    <div className="grid grid-cols-3 pb-4">
                        <ToggleSwitch options={[
                            { label: "Private", value: "private" },
                            { label: "Public", value: "public" },
                        ]} />
                        <ToggleSwitch options={[
                            { label: "NSFW", value: "NSFW" },
                            { label: "SFW", value: "SFW" },
                        ]} />
                        <SelectElement placeholder="Choose your theme" options={[
                            { value: "purple", label: "Dark Purple" },
                            { value: "white", label: "White" },
                            { value: "yellow", label: "Yellow" },
                            { value: "grapes", label: "Grapes" },
                            { value: "pineapple", label: "Pineapple" },
                        ]} />
                    </div>

                    <div className="space-y-2">
                        <Label>Tags</Label>
                        <Field
                            placeholder="tags to Follow"
                            name="scenario"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Tags To Avoid</Label>
                        <Field
                            type="email"
                            placeholder="Tags To Avoid  "
                            name="scenario"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>About Me</Label>
                        <Field
                            as="textarea"
                            placeholder="Enter you email"
                            name="scenario"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Following</Label>
                        <Field
                            as="textarea"
                            placeholder="Following"
                            name="scenario"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Subscription</Label>
                        <Field
                            as="textarea"
                            placeholder="Subscription"
                            name="scenario"
                        />
                    </div>

                </div>

            </form>
        </div>
    );
};

export default ProfileForm;
