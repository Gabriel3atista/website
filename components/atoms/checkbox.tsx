import { type ComponentPropsWithoutRef } from "react";

import { Checkbox as RadixCheckbox } from "radix-ui";

import { NextIcon } from "@/components/atoms/next-icon";

interface CheckboxProps extends ComponentPropsWithoutRef<typeof RadixCheckbox.Root> {
  id: string;
  label: string;
}

export function Checkbox ({ id, label, ...props }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <RadixCheckbox.Root
        id={id} 
        className="w-5 h-5 flex items-center justify-center rounded-md border text-white border-gray-300 bg-white data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
        {...props}
      >
        <RadixCheckbox.Indicator>
          <NextIcon name="mdi:check" size="2xs" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}