import { loadExternalStyles } from "alem/api";
import { AppBackground, AppContainer, Banner } from "./styles";
import Sidebar from "./components/Sidebar";
import ContentView from "./components/ContentView";
import Loading from "./components/Loading";
import useAlemStore from "./stores/useAlemStore";
import Footer from "./components/Footer/Footer";
import Modals from "./components/Modals/Modals";

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
      <AppContainer>
        <Sidebar />
        <ContentView />
        <AppBackground />
      </AppContainer>
      <Footer />
    </div>
  );
};

export default App;

// const [valor, setValor] = useState(1);

// console.log(valor);

// return (
//   <button
//     onClick={() => {
//       setValor(valor + 1);
//     }}
//   >
//     {valor}
//   </button>
// );
// setInterval(() => {
//   setValor(valor + 1);
// }, 1000);
