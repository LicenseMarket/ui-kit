import { ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    block?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type ButtonType = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
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
declare const _Button: ({ children, size, variant, loading, danger, block, icon, iconPosition, ghost, disabled, className, onClick, role, dataType, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default _Button;
