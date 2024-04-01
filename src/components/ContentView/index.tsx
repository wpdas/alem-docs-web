import { clipboard, getLocation, isDevelopment } from "alem";
import Routes from "../../Routes";
import { Container, Margin, ShareButton, TopSection } from "./styles";
import ShareIcon from "../../assets/svgs/share-icon";

type Props = {
  libVersion: string;
};

const ContentView = ({ libVersion }: Props) => {
  const site = isDevelopment
    ? "http://127.0.0.1:8080/alem-lib.near/widget/Index"
    : "https://alem.dev/";

  const { pathname } = getLocation();

  const copyToCliboard = () => {
    clipboard.writeText(`${site}?section=${pathname}`);
  };

  return (
    <Container>
      {pathname !== "about" && pathname !== "" && (
        <TopSection>
          <div>
            <ShareButton
              data-bs-toggle="modal"
              data-bs-target="#sharedInfoModal"
              onClick={copyToCliboard}
            >
              <ShareIcon />
              Share
            </ShareButton>
          </div>
        </TopSection>
      )}
      <Margin />
      <Routes libVersion={libVersion} />
    </Container>
  );
};

export default ContentView;
