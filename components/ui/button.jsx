import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "px-12 py-7 bg-[#4AC3BF] text-slate-100 hover:text-slate-50 hover:bg-opacity-80 hover:shadow hover:scale-105 transition w-auto rounded-full font-semibold text-center",
        primaryYellow: "px-12 py-7 bg-[#F48C06] text-slate-100 hover:text-slate-50 hover:bg-opacity-80 hover:shadow hover:scale-105 transition w-auto rounded-full font-semibold text-center",
        primaryPink: "px-12 py-7 bg-[#FF725E] text-slate-100 hover:text-slate-50 hover:bg-opacity-80 hover:shadow hover:scale-105 transition w-auto rounded-full font-semibold text-center",
        semi: "px-9 py-3 bg-transparent text-[#4AC3BF] hover:text-slate-50 hover:bg-opacity-90 hover:shadow hover:bg-[#4AC3BF] hover:scale-105 transition w-auto rounded-full font-semibold text-center",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
