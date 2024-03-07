import { AppBackground, AppContainer } from "@dapp/styles";
import Spinner from "./Spinner";

const Loading = () => {
  return (
    <AppContainer>
      <Spinner style={{ marginTop: "28vh" }} />
      <AppBackground />
    </AppContainer>
  );
};

export default Loading;
