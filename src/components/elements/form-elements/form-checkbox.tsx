"use client";

import * as React from "react";
import { useField } from "formik";
import { FieldRules } from "@/types/form-types";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormCheckboxProps {
  name: string;
  defaultValue?: boolean | string | string[];
  className?: string;
  label?: string;
  disabled?: boolean;
  rules?: FieldRules;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  label,
  disabled,
  className = "",
  ...props
}) => {
  const [field, , helpers] = useField(name);
  const { value } = field;
  const { setValue } = helpers;

  React.useEffect(() => {
    if (value === undefined && props.defaultValue !== undefined) {
      setValue(props.defaultValue);
    }
  }, [props.defaultValue, setValue, value]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Checkbox
        id={name}
        checked={!!value}
        disabled={disabled}
        onCheckedChange={(checked) => setValue(checked)}
        className="bg-primary/30 backdrop-blur-sm  border-primary/80  font-bold cursor-pointer 
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
