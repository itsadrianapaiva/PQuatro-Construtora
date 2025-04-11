import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-primary selection:text-primary-foreground dark:bg-input/30 flex h-[54px] w-full min-w-0 rounded-none border border-border bg-white px-6 py-2 text-base text-primary outline-none transition-[color,box-shadow] selection:bg-primary file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:outline-none focus:border-accent",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
