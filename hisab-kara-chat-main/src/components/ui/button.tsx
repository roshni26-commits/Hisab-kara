import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[4px_4px_12px_rgb(20_184_166_/0.3),-4px_-4px_12px_rgb(255_255_255_/0.6)] hover:-translate-y-0.5 hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background text-foreground shadow-[4px_4px_12px_rgb(203_213_225_/0.25),-4px_-4px_12px_rgb(255_255_255_/0.7)] hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[4px_4px_12px_rgb(14_165_233_/0.15),-4px_-4px_12px_rgb(255_255_255_/0.7)] hover:-translate-y-0.5 hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        mint: "bg-mint text-white shadow-[4px_4px_12px_rgb(52_211_153_/0.3),-4px_-4px_12px_rgb(255_255_255_/0.6)] hover:-translate-y-0.5 hover:bg-mint/90",
        sky: "bg-sky text-white shadow-[4px_4px_12px_rgb(56_189_248_/0.3),-4px_-4px_12px_rgb(255_255_255_/0.6)] hover:-translate-y-0.5 hover:bg-sky/90",
        yellow:
          "bg-yellow text-white shadow-[4px_4px_12px_rgb(245_158_11_/0.3),-4px_-4px_12px_rgb(255_255_255_/0.6)] hover:-translate-y-0.5 hover:bg-yellow/90",
        soft: "border border-input bg-card text-foreground shadow-[4px_4px_12px_rgb(203_213_225_/0.25),-4px_-4px_12px_rgb(255_255_255_/0.7)] hover:-translate-y-0.5 hover:bg-muted",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
