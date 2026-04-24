import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[96px] w-full rounded-xl border border-border bg-surface/50 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 leading-relaxed",
          "transition-colors focus-visible:outline-none focus-visible:border-violet-500/60 focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-violet-500/20",
          "disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
