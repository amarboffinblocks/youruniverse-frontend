"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormData } from "@/types/form-types";
import { buildZodSchema, buildInitialValues } from "@/utils/build-zod-schema";
import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "@/components/ui/button";
import FormFields from "./fields";
import { cn } from "@/lib/utils";

interface DynamicFormProps {
    schema: FormData[];
    initialValues?: Record<string,any>;
    onSubmit: (values: any) => void;
    children?: React.ReactNode;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
    schema,
    initialValues,
    onSubmit,
    children,
}) => {
    const validationSchema = buildZodSchema(schema);
    const defaultValues = buildInitialValues(schema);

    // Split schema once
    const fileFields = schema.filter((field) => field.type === "file");
    const otherFields = schema.filter((field) => field.type !== "file");

    return (
        <Formik
            initialValues={{ ...defaultValues, ...initialValues }}
            validationSchema={toFormikValidationSchema(validationSchema)}
            enableReinitialize
            onSubmit={onSubmit}
        >
            <Form className="grid grid-cols-12 gap-3">
               {fileFields.length > 0 &&<div className="col-span-2 flex flex-col gap-y-3">
                    {fileFields.map((field, index) => (
                        <FormFields key={index} {...field} cols={12} />
                    ))}
                </div>}

                <div className={cn(" grid grid-cols-12 gap-4",fileFields.length <= 0 ?"col-span-12":"col-span-10")}>
                    {otherFields.map((field, index) =>
                        index === 0 ? (
                            <div key={index} className="col-span-12 flex gap-x-3">
                                <div className="flex-1">
                                    <FormFields {...field} />
                                </div>
                                {children && <div className="pt-5.5">{children}</div>}
                            </div>
                        ) : (
                            <FormFields key={index} {...field} />
                        )
                    )}
                </div>

                <div className="col-span-12 flex justify-end">
                    <Button type="submit">Save</Button>
                </div>
            </Form>
        </Formik>
    );
};

export default DynamicForm;
