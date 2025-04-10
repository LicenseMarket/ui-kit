import _ from "lodash";

interface UserInfo {
  permissions: string[];
}

const getRolesFromLocalStorage = (): object => {
  try {
    const permissions = window.localStorage.getItem("permissions");

    if (permissions) {
      return _.groupBy(JSON.parse(permissions), (permission: any) =>
        permission?.resource?.toLowerCase()
      );
    } else {
      return {};
    }
  } catch (error) {
    console.error("Error parsing user_info from localStorage:", error);
    return {};
  }
};

const checkPermission = (
  resource: string,
  action: "read" | "create" | "update" | "delete"
) => {
  const roles: object = getRolesFromLocalStorage();

  if (!resource) return false;

  const permissions = roles;
  return permissions && permissions[resource]
    ? permissions[resource]?.findIndex((item: any) =>
        item.action.includes(action)
      ) >= 0
    : false;
};

export { checkPermission };
