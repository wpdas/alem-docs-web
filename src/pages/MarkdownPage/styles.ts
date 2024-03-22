import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  margin: 200px 0;
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
  /* padding: 10px 0px; */
  /* background-color: #ff0000; */
  align-items: flex-end;
  position: absolute;
  align-self: flex-end;
`;

export const Margin = styled.div``;
