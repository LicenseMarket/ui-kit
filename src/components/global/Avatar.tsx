import React, { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const sizeList = {
  xs: "w-[16px] h-[16px]",
  sm: "w-[24px] h-[24px]",
  md: "w-[32px] h-[32px]",
  lg: "w-[45px] h-[45px]",
};

interface PicItemProps {
  tooltip?: string;
  className?: string;
  src?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

export const Pic: FC<PicItemProps> = ({
  tooltip = "",
  src = "",
  size = "md",
  className,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar
            className={`${sizeList[size]} ${className} border-[1px] border-red-500`}
          >
            {src && (
              <AvatarImage
                src={src}
                alt={tooltip}
                className={`${sizeList[size]}`}
              />
            )}
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

const PicGroup: FC<{
  picList?: PicItemProps[];
  length?: number;
  direction?: "rtl" | "ltr";
}> = ({ picList = [], length = 5, direction = "rtl" }) => {
  return (
    <div
      className={`inline-flex ${direction == "ltr" ? "flex-row-reverse" : ""}`}
    >
      {picList.slice(0, length + 1).map((item, index) => {
        return (
          <>
            {index < length ? (
              <div
                key={`pic-item-${index}`}
                style={{
                  transform: `translate(${direction == "ltr" ? "-" : ""}${
                    index * (item.size === "lg" ? 15 : 6)
                  }px, 0)`,
                }}
              >
                <Pic {...item} />
              </div>
            ) : (
              <span
                className={`${sizeList[item?.size || "md"]} ${ item.className } bg-primary flex items-center
                  justify-center rounded-full border-[1px] border-white text-xs text-white`}
                style={{
                  transform: `translate(${direction == "ltr" ? "-" : ""}${
                    length * (item.size === "lg" ? 15 : 6)
                  }px, 0)`,
                }}
              >
                +{picList.length - length}
              </span>
            )}
          </>
        );
      })}
    </div>
  );
};

export default PicGroup;
