import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import Avatar from "../global/Avatar";
import { Check } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { getAvatarUrl } from "../../helpers/props";

interface OperatorsSelectProps {
  users: any[];
  selectedUsers: any;
  setSelectedUsers: React.Dispatch<React.SetStateAction<any>>;
}

export function OperatorsSelect({
  selectedUsers = [],
  setSelectedUsers,
  users,
}: OperatorsSelectProps) {
  return (
    <Card className="rounded border-0">
      <CardContent className="gap-0 p-0 outline-none">
        <Command className="overflow-hidden">
          <CommandInput placeholder="جستجوی کاربر..." />
          <CommandList className={"h-[400px] overflow-y-auto"}>
            <CommandEmpty>موردی یافت نشد</CommandEmpty>
            <CommandGroup className="p-2">
              {users?.map((user) => {
                const isActive = Array.isArray(selectedUsers)
                  ? selectedUsers.includes(user)
                  : selectedUsers === user;
                return (
                  <CommandItem
                    key={user.email}
                    className="flex items-center px-2"
                    onSelect={() => {
                      if (Array.isArray(selectedUsers)) {
                        if (selectedUsers.includes(user)) {
                          return setSelectedUsers(
                            selectedUsers.filter(
                              (selectedUser) => selectedUser !== user
                            )
                          );
                        }

                        return setSelectedUsers(
                          [...users].filter((u) =>
                            [...selectedUsers, user].includes(u)
                          )
                        );
                      } else {
                        setSelectedUsers(user);
                      }
                    }}
                  >
                    <Avatar
                      picList={[
                        {
                          src: getAvatarUrl(
                            user?.avatarUrl?.[0]?.thumbnail ||
                              user?.avatarThumbnail ||
                              user?.avatar
                          ),
                          tooltip: user.name,
                        },
                      ]}
                    />
                    <div className="ml-2">
                      <p className="text-sm font-medium leading-none">
                        {user.name || user.fullName}
                      </p>
                      {/* <p className="text-muted-foreground text-sm">
                      {user.email}
                    </p> */}
                    </div>
                    {isActive ? (
                      <Check className="text-primary mr-auto flex h-5 w-5" />
                    ) : null}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </CardContent>
    </Card>
  );
}
