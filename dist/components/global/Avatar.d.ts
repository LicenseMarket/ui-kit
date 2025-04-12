import { FC } from "react";
interface PicItemProps {
    tooltip?: string;
    className?: string;
    src?: string;
    size?: "xs" | "sm" | "md" | "lg";
}
export declare const Pic: FC<PicItemProps>;
declare const PicGroup: FC<{
    picList?: PicItemProps[];
    length?: number;
    direction?: "rtl" | "ltr";
}>;
export default PicGroup;
