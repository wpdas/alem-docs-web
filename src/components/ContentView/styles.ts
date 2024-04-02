import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* background: #fff; */
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  /* border-radius: 8px; */
  min-width: 240px;
  padding: 40px 17px 30px;
  z-index: 1;
  bottom: 0;
  margin-bottom: 40px;
  height: fit-content;
  width: 100%;
  max-width: 1046px;
  margin-left: auto;
  margin-right: auto;

  h4,
  h3,
  h2,
  h1 {
    font-weight: 700;
    font-size: 22px;
    color: rgb(35, 39, 47);
  }

  h1 {
    font-size: 28px;
  }

  h4 {
    font-size: 16px;
  }

  code {
    background-color: #eee;
    padding: 4px;
    border-radius: 4px;
    color: #292929;
  }

  /* Code Viewer */
  pre {
    div {
      background-color: #fafafa !important;
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

    .language-bash {
      color: #555 !important;
      > span {
        color: #555 !important;
        mix-blend-mode: normal;
      }
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

export const Title = styled.h3`
  font-weight: 700;
  font-size: 26px;
  color: #292929;
`;

export const ShareButton = styled.button`
  padding: 0.5rem 1.4rem;
  border-radius: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #292929;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;

  :hover {
    background-color: rgb(252 252 252);
  }

  span {
    margin-right: 18px;
    width: 18px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  align-self: flex-end;
`;

export const Margin = styled.div``;
