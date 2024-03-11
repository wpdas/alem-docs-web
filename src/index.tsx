import { AppBackground, AppContainer, Banner } from "./styles";
import Sidebar from "./components/Sidebar";
import ContentView from "./components/ContentView";
import Loading from "./components/Loading";
import Footer from "./components/Footer/Footer";
import Modals from "./components/Modals/Modals";
import useAlemStore from "./stores/useAlemStore";
import { loadExternalStyles } from "alem";
// TODO: Remover comentarios antes de processar
// imports comentados sao levados em conta.
// import { Row } from "./components/UI";

// TODO:
/**
 * Uma idea para usar vars com mesmo nome é:
 * 1 - Ler o conteudo de um arquivo e ver se a const já existe,
 * 2 - Caso exista, renomear a var do arquivo atual (c duplicidade) para um nome
 * aleatório, ex: Row_abc (usar um hash pra isso)
 * 2.2 - Ir em todos os arquivos que dependem desta var modificada, e mudar o nome
 * neles também para referenciar o objeto correto.
 */

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
      </AppContainer>
      <Footer />
      <AppBackground />
    </div>
  );
};

export default App;
