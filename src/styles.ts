import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const AppBackground = styled.div`
  background-color: #282c34;
  background-image: linear-gradient(180deg, #525a6b 0%, #000000 100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
`;
