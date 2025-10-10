"use client"
import React from "react";
import DynamicForm from "../elements/form-elements/dynamic-form";
import { characterSchema } from "@/schemas";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Copy, Link as LinkIcon, Trash2, Upload, Download, Folder, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
interface Props {
    characterId?: string;
}

const CharacterForm: React.FC<Props> = () => {


    return (
        <div className="py-10">
            <DynamicForm
                schema={characterSchema}
                onSubmit={(values) => {
                    console.log("Form Submitted:", values);
                }}
            >
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button type="button" className="rounded-full" >
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
            </DynamicForm>

        </div>
    );
};

export default CharacterForm;   
