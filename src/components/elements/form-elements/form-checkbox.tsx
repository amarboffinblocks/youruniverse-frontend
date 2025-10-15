"use client";

import * as React from "react";
import { useField } from "formik";
import { FieldRules } from "@/types/form-types";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormCheckboxProps {
  name: string;
  defaultValue?: boolean|string|string[];
  className?: string;
  label?: string;
  rules?: FieldRules;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  defaultValue = false,
  label,
  className = "",
}) => {
  const [field, , helpers] = useField({ name, type: "checkbox" });
  const { value } = field;
  const { setValue } = helpers;

  // Ensure the initial value is set if not already
  React.useEffect(() => {
    if (value === undefined && defaultValue !== undefined) {
      setValue(defaultValue);
    }
  }, [defaultValue, setValue, value]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Checkbox
        id={name}
        checked={!!value}
        onCheckedChange={(checked) => setValue(checked)}
        className="bg-primary/30 border-none font-bold cursor-pointer 
                   data-[state=checked]:text-white text-primary rounded-lg size-8"
      />
      {label && (
        <Label
          htmlFor={name}
          className="text-white text-sm font-medium cursor-pointer select-none"
        >
          {label}
        </Label>
      )}
    </div>
  );
};

export default FormCheckbox;
