import { useEffect, getLocation, useState, useRoutes, props } from "alem";
import { SidebarAboutLogo, Container } from "./styles";
import getLinksByCategory from "../../utils/getLinksByCategory";

const Sidebar = () => {
  const { pathname } = getLocation();
  const { routeParameterName } = useRoutes();

  const [gettingStartedItems, setGettingStartedItems] = useState<(JSX.Element | undefined)[]>([]);
  const [routerItems, setRouterItems] = useState<(JSX.Element | undefined)[]>([]);
  const [contextItems, setContextItems] = useState<(JSX.Element | undefined)[]>([]);
  const [apisItems, setApisItems] = useState<(JSX.Element | undefined)[]>([]);
  const [bosItems, setBosItems] = useState<(JSX.Element | undefined)[]>([]);

  useEffect(() => {
    const _gettingStartedItems = getLinksByCategory("Getting Started");
    const _routerItems = getLinksByCategory("Router");
    const _contextItems = getLinksByCategory("Context");
    const _apisItems = getLinksByCategory("APIs");
    const _bosItems = getLinksByCategory("BOS");

    setGettingStartedItems(_gettingStartedItems);
    setRouterItems(_routerItems);
    setContextItems(_contextItems);
    setApisItems(_apisItems);
    setBosItems(_bosItems);
  }, [pathname, routeParameterName]);

  return (
    <Container>
      <SidebarAboutLogo
        src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png"
        width={60}
        alt="logo"
      />

      <div>
        <h3>Getting Started</h3>
        {gettingStartedItems}
      </div>

      <div>
        <h3>Routes</h3>
        {routerItems}
      </div>

      <div>
        <h3>Context</h3>
        {contextItems}
      </div>

      <div>
        <h3>Utils</h3>
        {apisItems}
      </div>

      <div>
        <h3>NEAR VM (BOS)</h3>
        {bosItems}
      </div>
    </Container>
  );
};

export default Sidebar;
