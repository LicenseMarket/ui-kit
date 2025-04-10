import { ReactNode } from "react";
import { Button } from "../ui/button";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          " bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      block: false,
    },
  }
);

type ButtonType =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children?: ReactNode | string;
  variant?: ButtonType;
  size?: ButtonSize;
  loading?: boolean;
  danger?: boolean;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  ghost?: boolean;
  disabled?: boolean;
  block?: boolean;
  className?: string;
  onClick?: () => void;
  role?: string;
  dataType?: "button" | "submit";
}

const _Button = ({
  children,
  size = "default",
  variant = "default",
  loading,
  danger,
  block,
  icon,
  iconPosition = "start",
  ghost,
  disabled,
  className,
  onClick,
  role,
  dataType = "button",
}: ButtonProps) => {
  const type = danger ? "destructive" : ghost ? "ghost" : variant;

  return (
    <Button
      role={role}
      onClick={onClick}
      data-type={dataType}
      disabled={disabled || loading}
      variant={type as ButtonType}
      size={size}
      className={cn(buttonVariants({ variant, size, block }), className)}
    >
      {loading && <Loader2 className="animate-spin" />}
      {icon && iconPosition === "start" && icon}
      {children}
      {icon && iconPosition === "end" && icon}
    </Button>
  );
};

export default _Button;
