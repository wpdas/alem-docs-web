import { RouterProvider, asyncFetch, loadExternalStyles, useEffect, useState } from "alem";
import {
  AppBackground,
  AppContainer,
  Banner,
  MobileNavBarSwitcher,
  SideBarSwitcher,
} from "./styles";
import Sidebar from "./components/Sidebar";
import ContentView from "./components/ContentView";
import Loading from "./components/Loading";
import Footer from "./components/Footer/Footer";
import Modals from "./components/Modals/Modals";
import MobileNavBar from "./components/MobileNavBar";

const App = () => {
  const [libVersion, setLibVersion] = useState("");

  const stylesLoaded = loadExternalStyles([
    "https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400..800&display=swap",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
    "https://fonts.cdnfonts.com/css/source-code-pro",
  ]);

  useEffect(() => {
    // Populate initial content
    asyncFetch("https://api.github.com/repos/wpdas/alem/tags").then((data) => {
      setLibVersion(data.body[0].name.replace("v", ""));
    });
  }, []);

  if (!stylesLoaded || !libVersion) {
    return <Loading />;
  }

  // Routes provider
  // NOTE: Deve ser colocado acima de todos os recursos que vão utilizar as ferramentas do
  // Router.
  // TODO: Colocar isso na documentação
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

        <ContentView libVersion={libVersion} />
      </AppContainer>
      <Footer />
      <AppBackground />
    </div>
  );
};

export default App;
