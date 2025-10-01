"use client"
import React from "react";
import { Menu, Copy, Link as LinkIcon, Trash2, Upload, Download, Folder, RotateCcw } from "lucide-react";

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
import DynamicForm from "../elements/form-elements/dynamic-form";
import { profileSchema } from "@/schemas/profile-schema";
interface Props {
    characterId?: string;
}

const ProfileForm: React.FC<Props> = () => {


    return (
        <div className="py-10">
            <DynamicForm
                schema={profileSchema}
                onSubmit={(values) => {
                    console.log("Form Submitted:", values);
                }}
            // initialValues={{
            //     characterName: "Amarjeet Singh boffinblocks",
            //     rating: "SFW",
            //     visiable: "public",
            //     lorebook: "lorebook-2"
            // }}
            >
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

            </DynamicForm>

        </div>
    );
};

export default ProfileForm;
