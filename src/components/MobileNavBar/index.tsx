import { useEffect, getLocation, useState, useRoutes, RouteLink } from "alem";
import { CollapseButton, Container, ItemsContainer, Logo, NavBar } from "./styles";

import getLinksByCategory from "../../utils/getLinksByCategory";

const MobileNavBar = () => {
  const [show, setShow] = useState(false);

  const closeMenu = () => {
    setShow(false);
  };

  const { pathname } = getLocation();
  const { routeParameterName } = useRoutes();

  const [gettingStartedItems, setGettingStartedItems] = useState<(JSX.Element | undefined)[]>([]);
  const [routerItems, setRouterItems] = useState<(JSX.Element | undefined)[]>([]);
  const [contextItems, setContextItems] = useState<(JSX.Element | undefined)[]>([]);
  const [apisItems, setApisItems] = useState<(JSX.Element | undefined)[]>([]);
  const [bosItems, setBosItems] = useState<(JSX.Element | undefined)[]>([]);

  useEffect(() => {
    const _gettingStartedItems = getLinksByCategory("Getting Started", closeMenu);
    const _routerItems = getLinksByCategory("Router", closeMenu);
    const _contextItems = getLinksByCategory("Context", closeMenu);
    const _apisItems = getLinksByCategory("APIs", closeMenu);
    const _bosItems = getLinksByCategory("BOS", closeMenu);

    setGettingStartedItems(_gettingStartedItems);
    setRouterItems(_routerItems);
    setContextItems(_contextItems);
    setApisItems(_apisItems);
    setBosItems(_bosItems);
  }, [pathname, routeParameterName]);

  return (
    <Container>
      <NavBar>
        <RouteLink to="about">
          <Logo
            src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png"
            width={40}
            alt="logo"
          />
        </RouteLink>

        <CollapseButton
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {!show ? (
            <span className="material-symbols-outlined">menu</span>
          ) : (
            <span className="material-symbols-outlined">close</span>
          )}
        </CollapseButton>
      </NavBar>

      <ItemsContainer collapsed={show}>
        <div>
          <h3>Getting Started</h3>
          {gettingStartedItems}
        </div>

        <div>
          <h3>Router</h3>
          {routerItems}
        </div>

        <div>
          <h3>Context</h3>
          {contextItems}
        </div>

        <div>
          <h3>APIs</h3>
          {apisItems}
        </div>

        <div>
          <h3>NEAR VM (BOS)</h3>
          {bosItems}
        </div>
      </ItemsContainer>
    </Container>
  );
};

export default MobileNavBar;
