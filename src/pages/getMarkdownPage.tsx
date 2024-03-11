import Spinner from "../components/Spinner";
import { Markdown, clipboard, fetch } from "alem/bos";
import { TopSection, Margin, ShareButton, SpinnerWrapper } from "./styles";
import ShareIcon from "../assets/svgs/share-icon";
import { isDevelopment, useLocation } from "alem";

const getMarkdownPage = (mdFileURL: string) => {
  return () => {
    const mdContent = fetch(mdFileURL).body;

    const { pathname } = useLocation();
    const site = isDevelopment
      ? "http://127.0.0.1:8080/alem-lib.near/widget/Index"
      : "https://alem.dev/";

    const copyToCliboard = () => {
      clipboard.writeText(`${site}?section=${pathname}`);
    };

    return (
      <>
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
        <Margin />
        {mdContent ? (
          <Markdown text={mdContent} />
        ) : (
          <SpinnerWrapper>
            <Spinner dark />
          </SpinnerWrapper>
        )}
      </>
    );
  };
};

export default getMarkdownPage;
