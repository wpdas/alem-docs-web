import { RouteLink, useLocation } from "alem";
import { RoutesPath, RoutesPathProps } from "../Routes";

type SidebarItemProps = {
  to: string;
  label: string;
  onItemClick?: () => void;
};

const SidebarItem = ({ to, label, onItemClick }: SidebarItemProps) => {
  const { pathname } = useLocation();

  return (
    <RouteLink to={to} onClick={onItemClick}>
      <a className={pathname === to ? "active" : ""}>{label}</a>
    </RouteLink>
  );
};

const getLinksByCategory = (category: string, onItemClick?: () => void) =>
  Object.keys(RoutesPath).map((routeKey: string) => {
    const routeDetails = (RoutesPath as RoutesPathProps)[routeKey];
    if (routeDetails.category === category) {
      return (
        <SidebarItem onItemClick={onItemClick} to={routeDetails.path} label={routeDetails.title} />
      );
    }
  });

export default getLinksByCategory;
