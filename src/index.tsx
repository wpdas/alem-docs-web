import { loadExternalStyles } from "alem";
import Loading from "./components/Loading";
import Main from "./Main";

const App = () => {
  const stylesLoaded = loadExternalStyles([
    "https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400..800&display=swap",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
    "https://fonts.cdnfonts.com/css/source-code-pro",
  ]);

  if (!stylesLoaded) {
    return <Loading />;
  }

  return <Main />;
};

export default App;
