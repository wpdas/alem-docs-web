import { RouterContext, Storage, asyncFetch, props, useEffect, useState } from "alem";
import Footer from "@app/components/Footer/Footer";
import ContentView from "./components/ContentView";
import MobileNavBar from "./components/MobileNavBar";
import Modals from "./components/Modals/Modals";
import Sidebar from "./components/Sidebar";
import { AppBackground, AppContainer, Banner, MobileNavBarSwitcher, SideBarSwitcher } from "./styles";

const Main = () => {
  const [libVersion, setLibVersion] = useState(Storage.get("version"));

  useEffect(() => {
    asyncFetch("https://api.github.com/repos/wpdas/alem/tags").then((data) => {
      setLibVersion(data.body[0].name.replace("v", ""));
      Storage.set("version", data.body[0].name.replace("v", ""));
    });
  }, []);

  RouterContext();

  return (
    <div style={{ marginTop: "calc(-1 * var(--body-top-padding, 0))" }}>
      <Modals />
      <Banner>
        Além is currently on version <span>{libVersion}</span>
      </Banner>
      <MobileNavBarSwitcher>
        <MobileNavBar />
      </MobileNavBarSwitcher>
      <AppContainer>
        <SideBarSwitcher>
          <Sidebar />
        </SideBarSwitcher>
        <ContentView />
      </AppContainer>
      <Footer />
      <AppBackground />
    </div>
  );
};

export default Main;
