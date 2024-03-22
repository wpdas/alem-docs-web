import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: rgb(224 226 229) solid 1px;
  min-width: 240px;
  margin-top: 10px;
  margin-bottom: 40px;
  height: fit-content;

  @media (max-width: 800px) {
    width: 100%;
  }

  h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    color: #292929;
    padding: 12px 21px 6px;
  }

  a {
    display: block;
    font-size: 14px;
    font-weight: 600;
    padding: 6px 21px;
    margin-bottom: 0;
    border-radius: 4px;
    color: rgb(129, 129, 129);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-transform: capitalize;
  }

  a.active {
    background: #edf4fc !important;
    color: #4498e0 !important;
  }

  a:hover {
    color: #4498e0 !important;
  }
`;

export const NavBar = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
`;

export const CollapseButton = styled.button`
  background-color: rgb(243 244 246);
  border-radius: 12px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
`;

export const Logo = styled.img`
  align-self: center;
`;

export const ItemsContainer = styled.button<{ collapsed: boolean }>`
  display: flex;
  overflow: hidden;
  height: ${(props) => (props.collapsed ? "fit-content" : "0px")};
  background-color: #fff;
  border: none;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${(props) => (props.collapsed ? "44px" : "0")};
`;
