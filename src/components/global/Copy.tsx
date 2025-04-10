import { CopyIcon } from "lucide-react";
import React, { FC, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Copy: FC<{ text?: string }> = ({ text = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  return (
    <TooltipProvider disableHoverableContent={false}>
      <Tooltip open={copied}>
        <TooltipTrigger asChild>
          <CopyIcon
            onClick={handleClick}
            className="text-secondary-foreground h-[16px] w-[16px] cursor-pointer"
          />
        </TooltipTrigger>
        <TooltipContent className={"bg-green-500 text-white"}>
          <p>کپی شد</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Copy;
