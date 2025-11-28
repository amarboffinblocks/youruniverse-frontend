/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormData } from "@/types/form-types";
import { z } from "zod";


export function buildZodSchema(fields: FormData[]) {
    const shape: Record<string, any> = {};
    fields.forEach((field) => {
        let schema: any;

        switch (field.type) {
            /** 📝 Text & Textarea */
            case "text":
            case "textarea": {
                schema = z
                    .union([
                        z.string(),
                        z.undefined().transform(() => ""),
                    ])
                    .refine((val) => field.required ? val.trim().length > 0 : true, {
                        message: `${field.label || field.name} is required`,
                    });

                if (field.rules) {
                    const { min, max } = field.rules;
                    if (min)
                        schema = schema.refine((val: string | any[]) => val.length >= min, {
                            message: `${field.label || field.name} must be at least ${min} characters`,
                        });
                    if (max)
                        schema = schema.refine((val: string | any[]) => val.length <= max, {
                            message: `${field.label || field.name} must be less than ${max} characters`,
                        });
                }
                break;
            }
            /** 🟢 Toggle */
            case "toggle": {
                const options = field.rules?.options?.map((opt) => opt.value) || [];

                if (options.length > 0) {
                    schema = z.enum(options as [string, ...string[]]);
                } else {
                    schema = z.string();
                }

                if (field.required) {
                    schema = schema.refine((val: any) => !!val, {
                        message: `${field.label || field.name} is required`,
                    });
                } else {
                    schema = schema.optional();
                }

                if (field.defaultValue) {
                    schema = schema.default(field.defaultValue);
                }
                break;
            }
            /** 🔽 Select Field */
            case "select": {
                const options = field.rules?.options?.map((opt) => opt.value) || [];

                // ✅ Allow undefined for empty state
                schema = z.string().optional();

                // ✅ Required validation
                if (field.required) {
                    schema = schema.refine(
                        (val: string | null | undefined) => {
                            return val !== undefined &&
                                val !== null &&
                                val !== '' &&
                                val !== 'placeholder';
                        },
                        {
                            message: `Please select a ${field.label || field.name.toLowerCase()}`
                        }
                    );
                }

                // ✅ Options validation
                if (options.length > 0) {
                    schema = schema.refine(
                        (val: string) => {
                            if (!field.required && !val) return true;
                            return options.includes(val as string);
                        },
                        {
                            message: `Please select a valid ${field.label || field.name.toLowerCase()}`
                        }
                    );
                }

                if (field.defaultValue !== undefined) {
                    schema = schema.default(field.defaultValue);
                }

                break;
            }

            /** 🏷️ Multi-select */
            case "multi-select": {
                schema = z
                    .array(z.string())
                    .refine((arr) => (field.required ? arr.length > 0 : true), {
                        message: `${field.label || field.name} must have at least one selection`,
                    });

                if (!field.required) schema = schema.optional();

                schema = schema.default(field.defaultValue || []);

                break;
            }
            case "file": {
                if (field.required) {
                    schema = z.any().refine(
                        (value) => {
                            return !!value;
                        },
                        { message: `${field.label || field.name} is required.` }
                    );
                } else {
                    schema = z.any().optional();
                }
                break;
            }
            case "checkbox": {
                schema = z.boolean();

                // Apply default value (ensure boolean)
                const defaultVal =
                    typeof field.defaultValue === "boolean" ? field.defaultValue : false;

                schema = schema.default(defaultVal);

                // If required, ensure it's true
                if (field.required) {
                    schema = schema.refine((val: boolean) => val === true, {
                        message: `${field.label || field.name} must be checked`,
                    });
                }       

                break;
            }
            case "multi-entries": {
                schema = z.array(z.string())
                    .refine(
                        (arr) => arr.length > 0 && arr.some(item => item.trim().length > 0),
                        { message: "Alternate Messages must have at least one valid message" }
                    )
                    .refine(
                        (arr) => arr.every(item => item.trim().length > 0),
                        { message: "All Alternate Messages entries must contain text" }
                    )
                    .default([""]);
                break;
            }
            default: {
                schema = z.any().optional();
                break;
            }
        }

        if (schema) shape[field.name] = schema;
    });

    return z.object(shape);
}
export function buildInitialValues(fields: FormData[]) {
    const initialValues: Record<string, any> = {};

    fields.forEach((field) => {
        switch (field.type) {
            case "text":
            case "textarea":
                initialValues[field.name] = "";
                break;
            case "file":
                initialValues[field.name] = null;
                break;
            case "checkbox":
                initialValues[field.name] = false;
                break;
            case "multi-select":
            case "multi-entries":
                initialValues[field.name] = [];
                break;
            case "toggle":
            case "select":
                initialValues[field.name] = "";
                break;
            default:
                initialValues[field.name] = "";
                break;
        }
    });

    return initialValues;
}
