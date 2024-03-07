import styled from "styled-components";

export const ContentViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  min-width: 240px;
  width: 240px;
  padding: 40px 17px 30px;
  z-index: 1;
  bottom: 0;
  margin-bottom: 40px;
  margin-left: 16px;
  height: fit-content;
  width: 100%;

  h2 {
    font-weight: 700;
    font-size: 22px;
    color: #292929;
  }

  code {
    background-color: #eee;
    padding: 4px;
    border-radius: 4px;
    color: #292929;
  }
`;

export const ContentViewTitle = styled.h3`
  font-weight: 700;
  font-size: 26px;
  color: #292929;
`;
