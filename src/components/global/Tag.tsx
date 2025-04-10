import React, { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface TagProps {
  children?: string;
  className?: string;
  tooltipText?: string;
}

const Tag: FC<TagProps> = ({ children, tooltipText, className = "" }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`${className} bg-secondary text-white" flex h-[22px] w-[170px] items-center
              justify-center rounded border text-xs dark:border-neutral-700 `}
          >
            {children}
          </div>
        </TooltipTrigger>
        {tooltipText && (
          <TooltipContent>
            <p>{tooltipText}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default Tag;
