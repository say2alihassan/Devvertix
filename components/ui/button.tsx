import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "gradient" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading, children, ...props }, ref) => {
    const variants = {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
      gradient:
        "relative text-white bg-[linear-gradient(135deg,#8B5CF6_0%,#3B82F6_100%)] hover:brightness-110 shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.8)]",
      outline:
        "border border-border bg-surface/60 backdrop-blur-md text-foreground hover:bg-surface-elevated hover:border-border-strong",
      ghost:
        "text-foreground hover:bg-surface-elevated",
      link:
        "text-foreground underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-10 px-5 py-2 text-sm",
      sm: "h-9 rounded-lg px-4 text-sm",
      lg: "h-12 rounded-xl px-7 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
