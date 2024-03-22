import { Markdown, clipboard, fetch, getLocation, isDevelopment } from "alem";
import { Margin, ShareButton, SpinnerWrapper, TopSection } from "./styles";
import ShareIcon from "../../assets/svgs/share-icon";
import Spinner from "../../components/Spinner";

type Props = {
  mdFileURL: string;
};

const MarkdownPage = ({ mdFileURL }: Props) => {
  // const foo = useAlemStore();
  // const fileURL = "https://cdn.jsdelivr.net/gh/wpdas/alem@" + foo.currentVersion + mdFileURL;

  // const fileURLss = `cdn.jsdelivr.net/gh/wpdas/alem = ${foo.currentVersion} = ${mdFileURL}`;

  // console.log("CHEECK", mdFileURL);
  const mdContent = fetch(mdFileURL).body;

  const { pathname } = getLocation();
  // console.log("MarkdownPage -> useLocation", useLocation());
  // let pathname = "temp";

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

export default MarkdownPage;
