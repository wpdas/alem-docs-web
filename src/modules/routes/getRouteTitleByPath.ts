import { RoutesPath } from "./routeProps";

const getRouteTitleByPath = (routePath?: string) => {
  if (!routePath) return "";
  let routeProps: any = null;
  Object.keys(RoutesPath).forEach((route) => {
    if ((RoutesPath as any)[route].path === routePath) {
      routeProps = (RoutesPath as any)[route];
    }
  });
  return routeProps.title;
};

export default getRouteTitleByPath;
