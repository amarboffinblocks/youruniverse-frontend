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
import type { CreateLorebookRequest, LorebookEntry } from "@/lib/api/lorebooks";

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
        // Process entries - handle multiple formats
        let entries: LorebookEntry[] | undefined = undefined;

        // Handle entries in different formats
        if (values.entries && Array.isArray(values.entries)) {
            // If entries is already an array of objects
            entries = values.entries
                .filter((entry: any) => entry && (entry.keyword || entry.context))
                .map((entry: any, index: number) => ({
                    keyword: entry.keyword || "",
                    context: entry.context || "",
                    priority: entry.priority || index + 1,
                    isEnabled: entry.isEnabled !== undefined ? entry.isEnabled : true,
                }))
                .filter((entry: LorebookEntry) => entry.keyword && entry.context);
        } else if (values.keyword || values.context) {
            // Handle single entry or comma-separated keywords
            if (Array.isArray(values.keyword) && Array.isArray(values.context)) {
                // Multiple entries as arrays
                entries = values.keyword
                    .map((keyword: string, index: number) => ({
                        keyword: keyword || "",
                        context: values.context[index] || "",
                        priority: index + 1,
                        isEnabled: true,
                    }))
                    .filter((entry: LorebookEntry) => entry.keyword && entry.context);
            } else if (typeof values.keyword === 'string' && values.context) {
                // Single entry - check if keyword contains commas (multiple keywords)
                const keywords = values.keyword.split(',').map((k: string) => k.trim()).filter(Boolean);
                const context = typeof values.context === 'string' ? values.context : String(values.context);

                if (keywords.length > 1) {
                    // Multiple keywords with same context
                    entries = keywords.map((keyword: string, index: number) => ({
                        keyword: keyword,
                        context: context,
                        priority: index + 1,
                        isEnabled: true,
                    }));
                } else if (keywords.length === 1) {
                    // Single keyword with context
                    entries = [{
                        keyword: keywords[0],
                        context: context,
                        priority: 1,
                        isEnabled: true,
                    }];
                }
            }
        }

        // Process avatar - handle file upload or URL
        let avatar: { url: string } | undefined = undefined;
        if (values.avatar) {
            if (typeof values.avatar === 'string') {
                // Direct URL string
                avatar = { url: values.avatar };
            } else if (values.avatar instanceof File) {
                // File object - in a real implementation, you'd upload this first
                // For now, we'll create a temporary URL or skip it
                // TODO: Implement file upload for avatar
                console.warn("File upload for avatar not yet implemented");
            } else if (values.avatar?.url) {
                // Already in the correct format
                avatar = { url: values.avatar.url };
            } else if (values.avatar?.file) {
                // File object wrapped in an object
                // TODO: Implement file upload
                console.warn("File upload for avatar not yet implemented");
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
