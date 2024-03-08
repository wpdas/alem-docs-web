import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  /* border-radius: 8px; */
  border-right: rgba(41, 41, 41, 0.2) solid 1px;
  min-width: 240px;
  width: 240px;
  padding: 0px 17px 30px;
  margin-top: 40px;
  z-index: 1;
  bottom: 0;
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
