import getLinksByCategory from "../../utils/getLinksByCategory";
import { SidebarAboutLogo, Container } from "./styles";

const Sidebar = () => {
  return (
    <Container>
      <SidebarAboutLogo
        src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png"
        width={60}
        alt="logo"
      />

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
    </Container>
  );
};

export default Sidebar;
