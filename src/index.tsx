import { loadFonts } from "alem/theme";
import { AppBackground, AppContainer } from "./styles";
import Sidebar from "./components/Sidebar";
import ContentView from "./components/ContentView";
import Loading from "./components/Loading";

const App = () => {
  const fontsLoaded = loadFonts([
    "https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400..800&display=swap",
    "https://fonts.cdnfonts.com/css/source-code-pro",
  ]);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <AppContainer>
      <Sidebar />
      <ContentView />
      <AppBackground />
    </AppContainer>
  );
};

export default App;
