"use client"
import React from "react";
import { useRouter } from "next/navigation";
import DynamicForm from "../elements/form-elements/dynamic-form";
import { lorebookSchema } from "@/schemas";
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
import { useCreateLorebook } from "@/hooks";
import type { CreateLorebookRequest, CreateLorebookEntryInput } from "@/lib/api/lorebooks";

interface Props {
    lorebookId?: string;
}

const LorebookForm: React.FC<Props> = () => {
    const router = useRouter();
    const {
        createLorebook,
        isLoading,
        isSuccess,
        error,
    } = useCreateLorebook({
        onSuccess: (data) => {

        },
        showToasts: true,
    });

    /**
     * Handle form submission
     * Maps form values to API request format
     */
    const handleSubmit = async (values: Record<string, any>) => {
        // Process entries - format: { keywords: string[], context: string }[]
        let entries: CreateLorebookEntryInput[] | undefined = undefined;

        if (values.entries && Array.isArray(values.entries)) {
            // Entries field format: { keywords: string[], context: string }[]
            // Backend expects same format: { keywords: string[], context: string }[]
            const convertedEntries: CreateLorebookEntryInput[] = [];
            let priority = 1;

            values.entries.forEach((entry: any) => {
                if (entry && entry.keywords && Array.isArray(entry.keywords) && entry.context) {
                    // Filter out empty keywords and ensure at least one keyword
                    const validKeywords = entry.keywords
                        .map((k: string) => k.trim())
                        .filter((k: string) => k.length > 0);

                    if (validKeywords.length > 0) {
                        convertedEntries.push({
                            keywords: validKeywords,
                            context: entry.context.trim(),
                            priority: priority++,
                            isEnabled: entry.isEnabled !== undefined ? entry.isEnabled : true,
                        });
                    }
                } else if (entry && entry.keyword && entry.context) {
                    // Legacy format: { keyword: string, context: string } - convert to array
                    const keyword = entry.keyword.trim();
                    if (keyword.length > 0) {
                        convertedEntries.push({
                            keywords: [keyword],
                            context: entry.context.trim(),
                            priority: priority++,
                            isEnabled: entry.isEnabled !== undefined ? entry.isEnabled : true,
                        });
                    }
                }
            });

            entries = convertedEntries.length > 0 ? convertedEntries : undefined;
        }

        // Process avatar - handle file upload or URL
        let avatar: File | string | undefined = undefined;
        if (values.avatar) {
            if (typeof values.avatar === 'string') {
                // Direct URL string
                avatar = values.avatar;
            } else if (values.avatar instanceof File) {
                // File object
                avatar = values.avatar;
            } else if (values.avatar?.url) {
                // Already in the correct format - extract URL string
                avatar = values.avatar.url;
            } else if (values.avatar?.file) {
                // File object wrapped in an object
                avatar = values.avatar.file;
            }
        }

        // Map form values to API request format
        const lorebookData: CreateLorebookRequest = {
            name: values.lorebookName || "",
            description: values.description || undefined,
            visibility: (values.visiable as "public" | "private") || "private",
            rating: (values.rating as "SFW" | "NSFW") || "SFW",
            avatar: avatar,
            tags: Array.isArray(values.tags) ? values.tags : values.tags ? [values.tags] : undefined,
            entries: entries && entries.length > 0 ? entries : undefined,
        };

        // Trigger lorebook creation
        createLorebook(lorebookData);
    };

    return (
        <div className="py-10">
            <DynamicForm
                schema={lorebookSchema}
                onSubmit={handleSubmit}
                submitButtonText={isLoading ? "Creating Lorebook..." : isSuccess ? "Lorebook Created!" : "Create Lorebook"}
                isSubmitting={isLoading}
                submitButtonDisabled={isLoading || isSuccess}
            >
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button type="button" className="rounded-full" disabled={isLoading || isSuccess}>
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
            </DynamicForm>

        </div>
    );
};

export default LorebookForm;
