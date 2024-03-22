import { AppBackground, AppContainer } from "../styles";
import Spinner from "./Spinner";

const Loading = () => {
  // const foo = {marginTop: "28vh"};

  return (
    <AppContainer>
      <Spinner style={{ marginTop: "28vh" }} dark />
      <AppBackground />
    </AppContainer>
  );
};

export default Loading;
