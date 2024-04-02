import { RouterProvider, asyncFetch, useEffect, useState } from "alem";
import Modals from "./components/Modals/Modals";
import {
  AppBackground,
  AppContainer,
  Banner,
  MobileNavBarSwitcher,
  SideBarSwitcher,
} from "./styles";
import MobileNavBar from "./components/MobileNavBar";
import Sidebar from "./components/Sidebar";
import ContentView from "./components/ContentView";
import Footer from "./components/Footer/Footer";

const Main = () => {
  const [libVersion, setLibVersion] = useState("");

  useEffect(() => {
    asyncFetch("https://api.github.com/repos/wpdas/alem/tags").then((data) => {
      setLibVersion(data.body[0].name.replace("v", ""));
    });
  }, []);

  RouterProvider();

  return (
    <div style={{ marginTop: "calc(-1 * var(--body-top-padding, 0))" }}>
      <Modals />
      <Banner>
        Alem is currently on version <span>{libVersion}</span>.
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
