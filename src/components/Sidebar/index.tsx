import { RouteLink, useLocation } from "alem/router";
import { SidebarContainer } from "./styles";
import { RoutesPath, RoutesPathProps } from "@dapp/Routes";

type SidebarItemProps = {
  to: string;
  label: string;
};

const SidebarItem = ({ to, label }: SidebarItemProps) => {
  const { pathname } = useLocation();
  const currentPathname = pathname || RoutesPath.featureOverview.path;

  return (
    <RouteLink to={to}>
      <a className={currentPathname === to ? "active" : ""}>{label}</a>
    </RouteLink>
  );
};

const Sidebar = () => {
  const getLinksByCategory = (category: string) =>
    Object.keys(RoutesPath).map((routeKey: string) => {
      const routeDetails = (RoutesPath as RoutesPathProps)[routeKey];
      if (routeDetails.category === category) {
        return <SidebarItem to={routeDetails.path} label={routeDetails.title} />;
      }
    });

  return (
    <SidebarContainer>
      <div>
        <h3>Getting Started</h3>
        {getLinksByCategory("Getting Started")}
      </div>

      <div>
        <h3>Store</h3>

        {getLinksByCategory("Store")}
      </div>

      <div>
        <h3>Router</h3>
        {getLinksByCategory("Router")}
      </div>

      <div>
        <h3>APIs</h3>

        {getLinksByCategory("APIs")}
      </div>

      <div>
        <h3>NEAR VM (BOS)</h3>

        {getLinksByCategory("BOS")}
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
