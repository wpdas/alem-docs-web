import { RouteLink, useState } from "alem";
import { CollapseButton, Container, ItemsContainer, Logo, NavBar } from "./styles";
import { RoutesPath } from "../../Routes";
import getLinksByCategory from "../../utils/getLinksByCategory";

const MobileNavBar = () => {
  const [show, setShow] = useState(false);

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <Container>
      <NavBar>
        <RouteLink to={RoutesPath.about.path}>
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
          {getLinksByCategory("Getting Started", closeMenu)}
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
      </ItemsContainer>
    </Container>
  );
};

export default MobileNavBar;
