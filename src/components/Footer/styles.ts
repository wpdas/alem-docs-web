import styled from "styled-components";

export const FooterContainer = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  border-top: 1px solid rgb(224 226 229);
  color: rgb(67 74 90);
  font-weight: 500;
  line-height: 30px;
  width: 100%;
  padding: 22px 70px;
  font-family: "Source Code Pro", sans-serif, ui-sans-serif, system-ui, -apple-system;

  span {
    color: rgb(8 126 164);
    margin-left: 8px;
  }
`;

export const FooterItem = styled.a`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 0 8px;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  p {
    margin: 0 0 0 8px;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  p {
    font-size: 14px;
    margin-bottom: 0;
  }
  a {
    color: #292929;
  }
`;

export const FooterDescription = styled.p`
  margin: 0;
  max-width: 300px;
  text-align: center;
  a {
    color: rgb(8 126 164);
  }
`;
