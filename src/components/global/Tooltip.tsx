import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import React from "react";

interface TooltipGlobalProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

const TooltipGlobal = ({ trigger, content, className }: TooltipGlobalProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent className={className}>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipGlobal;
