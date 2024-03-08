import styled from "styled-components";

export const ContentViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  /* border-radius: 8px; */
  min-width: 240px;
  width: 240px;
  padding: 40px 17px 30px;
  z-index: 1;
  bottom: 0;
  margin-bottom: 40px;
  margin-left: 16px;
  height: fit-content;
  width: 100%;

  h2,
  h1 {
    font-weight: 700;
    font-size: 22px;
    /* color: #292929; */
    color: rgb(35, 39, 47);
  }

  code {
    background-color: #eee;
    padding: 4px;
    border-radius: 4px;
    color: #292929;
  }

  // Code Viewer
  pre {
    div {
      background-color: #fafafa !important;
      /* background-color: #292929 !important; */
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      border-radius: 8px;
      margin: 8px !important;
    }

    span {
      mix-blend-mode: exclusion;
      filter: saturate(4) hue-rotate(250deg);
      font-size: 14px;
      font-family: "Source Code Pro", sans-serif, ui-sans-serif, system-ui, -apple-system;
      line-height: 24px;
      -webkit-font-smoothing: auto;
      opacity: 0.9;
    }

    .language-sh {
      color: #555 !important;
    }
  }

  a {
    color: rgb(8 126 164) !important;
  }

  strong {
    opacity: 0.8;
  }

  p {
    font-size: 17px;
    font-weight: 500;
    color: rgb(35 39 47);
  }

  ul {
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: 500;
    margin-left: 0px !important;
    color: rgb(35 39 47);
  }
`;

export const ContentViewTitle = styled.h3`
  font-weight: 700;
  font-size: 26px;
  color: #292929;
`;
