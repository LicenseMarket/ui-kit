import { FC, InputHTMLAttributes, ReactNode } from "react";
interface EditableProps {
    labelProps: {
        children: ReactNode;
        className?: string;
    };
    editInputProps: InputHTMLAttributes<HTMLInputElement>;
    editOpen?: boolean;
    handleEditClose?: (...args: unknown[]) => unknown;
    handleEditOpen?: (...args: unknown[]) => unknown;
    onSubmit?: (...args: unknown[]) => unknown;
    editable?: boolean;
}
declare const Editable: FC<EditableProps>;
export default Editable;
