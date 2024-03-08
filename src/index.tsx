import { loadFonts } from "alem/theme";
import { AppBackground, AppContainer, Banner } from "./styles";
import Sidebar from "./components/Sidebar";
import ContentView from "./components/ContentView";
import Loading from "./components/Loading";
import useAlemStore from "./stores/useAlemStore";

const App = () => {
  const { currentVersion } = useAlemStore();

  const fontsLoaded = loadFonts([
    "https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400..800&display=swap",
    "https://fonts.cdnfonts.com/css/source-code-pro",
  ]);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <div style={{ marginTop: "calc(-1 * var(--body-top-padding, 0))" }}>
      <Banner>
        Alem is currently on version <span>{currentVersion}</span>.
      </Banner>
      <AppContainer>
        <Sidebar />
        <ContentView />
        <AppBackground />
      </AppContainer>
    </div>
  );
};

export default App;
