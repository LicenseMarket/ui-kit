import React, { FC, InputHTMLAttributes, ReactNode } from "react";
import { Input } from "../ui/input";
import { CheckIcon, Pencil, X } from "lucide-react";

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

const Editable: FC<EditableProps> = ({
  labelProps,
  editInputProps,
  editOpen,
  handleEditClose,
  editable = true,
  handleEditOpen,
  onSubmit,
}) => {
  return (
    <p className={`${labelProps?.className} text-md flex items-center`}>
      {editOpen ? (
        <Input
          type="text"
          {...editInputProps}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSubmit && onSubmit();
            }
          }}
        />
      ) : (
        labelProps?.children
      )}
      {editable && (
        <button className="mr-2 text-gray-500 focus:outline-none">
          {editOpen ? (
            <div className="flex">
              <X
                onClick={handleEditClose}
                className="h-5 w-5 hover:text-gray-700"
              />
              <CheckIcon
                onClick={onSubmit}
                className="h-5 w-5 hover:text-gray-500"
              />
            </div>
          ) : (
            <Pencil
              onClick={handleEditOpen}
              className="h-5 w-5 hover:text-gray-500"
            />
          )}
        </button>
      )}
    </p>
  );
};

export default Editable;
