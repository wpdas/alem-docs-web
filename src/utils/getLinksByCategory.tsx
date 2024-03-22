import { RouteLink, getLocation } from "alem";
import { RoutesPath, RoutesPathProps } from "../routeProps";

const getLinksByCategory = (category: string, onItemClick?: () => void) => {
  const { pathname } = getLocation();

  return Object.keys(RoutesPath)
    .map((routeKey: string) => {
      const routeDetails = (RoutesPath as RoutesPathProps)[routeKey];
      if (routeDetails.category === category) {
        return (
          <RouteLink
            to={routeDetails.path}
            onClick={onItemClick}
            label={routeDetails.title}
            className={pathname === routeDetails.path ? "active" : ""}
          />
        );
      }
    })
    .filter((item) => !!item);
};

export default getLinksByCategory;
