import React, { ReactNode } from "react";
export interface PermissionProps {
    assigned: boolean;
    action: string;
    application: string;
    attribute: string[];
    createdAt: string;
    id: string;
    isDeleted: boolean;
    name: string;
    persianName: string;
    possession: string;
    resource: string;
}
interface Content {
    label?: string;
    subLabel?: string;
    ids?: string[];
    children?: PermissionProps[];
}
interface AccordionItemType {
    label: string;
    badge: string;
    children?: ReactNode;
    content?: Content[];
}
interface AccordionProps {
    items: AccordionItemType[];
    counts?: number;
    className?: string;
    label: string;
    badge?: string;
    value: string;
    entireRolePermissionIds?: string[];
    onDialogSubmit?: (defaultArray: string[], allPermissionIds: string[]) => void;
    onDialogClose?: (selected: string[]) => void;
}
declare const AccordionComponent: React.FC<AccordionProps>;
export default AccordionComponent;
