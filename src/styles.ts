import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* font-family: "Open Sans", sans-serif; */
  font-family: "Wix Madefor Display", sans-serif;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const AppBackground = styled.div`
  background-color: #fff;
  /* background-color: #282c34; */
  /* background-image: linear-gradient(180deg, #525a6b 0%, #000000 100%); */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
`;

export const Banner = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  height: 40px;
  background-color: rgb(243 244 246);
  color: rgb(67 74 90);
  font-weight: 500;
  line-height: 30px;
  width: 100%;

  span {
    color: rgb(8 126 164);
    margin-left: 8px;
  }
`;

export const MobileNavBarSwitcher = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
`;

export const SideBarSwitcher = styled.div`
  display: flex;
  @media (max-width: 800px) {
    display: none;
  }
`;
