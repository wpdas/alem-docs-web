import Routes from "../../Routes";
import { Container } from "./styles";

type Props = {
  libVersion: string;
};

const ContentView = ({ libVersion }: Props) => {
  return (
    <Container>
      <Routes libVersion={libVersion} />
    </Container>
  );
};

export default ContentView;
