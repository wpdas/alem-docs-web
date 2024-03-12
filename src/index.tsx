import { loadExternalStyles } from "alem";
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
import useAlemStore from "./stores/useAlemStore";
import MobileNavBar from "./components/MobileNavBar";

const App = () => {
  const { currentVersion } = useAlemStore();

  const stylesLoaded = loadExternalStyles([
    "https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400..800&display=swap",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
    "https://fonts.cdnfonts.com/css/source-code-pro",
  ]);

  if (!stylesLoaded) {
    return <Loading />;
  }

  return (
    <div style={{ marginTop: "calc(-1 * var(--body-top-padding, 0))" }}>
      <Modals />
      <Banner>
        Alem is currently on version <span>{currentVersion}</span>.
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

export default App;
