/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormData } from "@/types/form-types";
import { z } from "zod";

export function buildZodSchema(fields: FormData[]) {
    const shape: Record<string, any> = {}; 

    fields.forEach((field) => {
        let schema: any;

        switch (field.type) {
            case "text":
            case "textarea":
                schema = z.string().trim();
                if (field.rules?.min) schema = schema.min(field.rules.min);
                if (field.rules?.max) schema = schema.max(field.rules.max);
                if (field.required) schema = schema.nonempty(`${field.label} is required`);
                break;

            case "radio":
            case "select":
                schema = z.string();
                if (field.required) schema = schema.nonempty(`${field.label} is required`);
                break;

            case "file":
                schema = z
                    .any()
                    .refine(
                        (file) => (!field.required && !file) || file instanceof File,
                        `${field.label} must be a file`
                    );
                break;

            case "multi-select":
                schema = field.multiple ? z.array(z.string()) : z.string();
                if (!field.required) schema = schema.optional();
                if (field.required) schema = schema.refine((val: any) => !!val, `${field.label} is required`);
                break;

            case "toggle":
            case "switch":
                schema = z.boolean();
                if (!field.required) schema = schema.optional();
                if (field.required) schema = schema.refine((val: any) => val !== undefined, `${field.label} is required`);
                break;

            default:
                schema = z.any();
        }

        shape[field.name] = schema;
    });

    return z.object(shape);
}

export function buildInitialValues(fields: FormData[]) {
    const values: Record<string, any> = {};
    fields.forEach((field) => {
        values[field.name] = field.defaultValue ?? "";
    });
    return values;
}
