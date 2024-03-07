import Spinner from "@dapp/components/Spinner";
import { Markdown, fetch } from "alem/bos";
import styled from "styled-components";

const getMarkdownPage = (mdFileURL: string) => {
  const SpinnerWrapper = styled.div`
    margin: 200px 0;
  `;

  return () => {
    const mdContent = fetch(mdFileURL).body;

    if (!mdContent) {
      return (
        <SpinnerWrapper>
          <Spinner dark />
        </SpinnerWrapper>
      );
    }

    return (
      <>
        <Markdown text={mdContent} />
      </>
    );
  };
};

export default getMarkdownPage;
