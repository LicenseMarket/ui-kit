import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import React, { Fragment, ReactNode, useEffect, useMemo, useState } from "react";
import { Badge } from "../ui/badge";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { MoveDiagonal } from "lucide-react";
import { Switch } from "../ui/switch";

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

const AccordionComponent: React.FC<AccordionProps> = ({
  items: accordions = [],
  counts,
  className,
  entireRolePermissionIds,
  onDialogSubmit,
  onDialogClose,
  label,
  badge,
  value,
}) => {
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [ids, setIds] = useState<string[]>([]);
  const isContentOpen = useMemo(() => !!selectedContent, [selectedContent]);
  const allPermissionIds =
    selectedContent?.children?.map((p) => p.id).sort() || [];
  const allChecked =
    JSON.stringify(allPermissionIds) === JSON.stringify(ids.sort());

  const handleContentSubmit = () => {
    if (onDialogSubmit) onDialogSubmit(ids, allPermissionIds);
    setSelectedContent(null);
  };

  const handleContentClose = () => {
    if (onDialogClose) onDialogClose(selectedContent?.ids || []);
    setSelectedContent(null);
  };

  useEffect(() => {
    if (selectedContent) {
      setIds(
        allPermissionIds.filter((pId) => entireRolePermissionIds?.includes(pId))
      );
    } else {
      setIds([]);
    }
  }, [selectedContent]);

  return (
    <Fragment>
      <Accordion
        type="single"
        collapsible
        className={cn(
          "rtl h-[calc(100vh-475px)] w-full overflow-y-auto px-3",
          className
        )}
      >
        <AccordionItem value={value} className="border-b">
          <AccordionTrigger className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              {counts && (
                <span
                  className="size-5 flex items-center justify-center rounded-full text-[#EF394E] ring
                    ring-[#EF394E]"
                >
                  {counts}
                </span>
              )}
              {label}
            </div>
            <div className="flex items-center justify-between gap-2.5">
              {badge && <Badge className="bg-[#1E293B]">{badge}</Badge>}
              <ChevronDownIcon className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
            </div>
          </AccordionTrigger>
          {accordions.map((accordion, accordionIndex) => (
            <AccordionContent key={accordionIndex}>
              {accordion.content?.length
                ? accordion.content.map((cont, contIndex) => (
                  <div
                    key={`nested-${contIndex}`}
                    className="mb-4 rounded-[16px] border"
                  >
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`nested-${contIndex}`}>
                        <div
                          className="flex cursor-pointer items-center justify-between p-2.5"
                          onClick={() =>
                            setSelectedContent(isContentOpen ? null : cont)
                          }
                        >
                          <div className="flex flex-col space-y-2 p-1">
                            <p className="ml-[45px]">{cont.label}</p>

                            <span>{cont.subLabel}</span>
                          </div>
                          <MoveDiagonal className="text-muted-foreground h-[24px] w-[24px]" />
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))
                : accordion.children}
            </AccordionContent>
          ))}
        </AccordionItem>
      </Accordion>

      <Dialog open={isContentOpen} onOpenChange={handleContentClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              {selectedContent?.label}
              <div className="flex items-center gap-[8px]">
                <span className="text-[14px]">همه</span>
                <Switch
                  checked={allChecked}
                  onCheckedChange={() => {
                    if (allChecked) {
                      setIds([]);
                    } else {
                      setIds(allPermissionIds);
                    }
                  }}
                />
              </div>
            </DialogTitle>
            <DialogDescription>{selectedContent?.subLabel}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-start justify-start">
            {selectedContent?.children?.map(
              (permissionItem: PermissionProps, permissionIndex: any) => {
                const lastItemBorder =
                  permissionIndex + 1 === selectedContent?.children?.length
                    ? "border-b"
                    : "";
                const permissionChecked = ids.includes(permissionItem.id);
                return (
                  <div
                    key={`permissionItem-${permissionIndex}`}
                    className={`flex w-full items-center justify-between border-t px-2 py-3 ${lastItemBorder}`}
                  >
                    <p>{permissionItem.persianName}</p>

                    <div>
                      <Switch
                        checked={permissionChecked}
                        onCheckedChange={() => {
                          if (permissionChecked) {
                            setIds(ids.filter((p) => p !== permissionItem.id));
                          } else {
                            setIds([...ids, permissionItem.id]);
                          }
                        }}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <DialogFooter className="justify-end gap-[8px]">
            <Button
              type="button"
              variant={"outline"}
              onClick={handleContentClose}
            >
              بستن
            </Button>
            <Button type="button" onClick={handleContentSubmit}>
              تائید
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default AccordionComponent;
