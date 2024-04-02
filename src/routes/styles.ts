import styled from "styled-components";

export const FooterNavContainer = styled.div<{ hasPrevious?: boolean; hasNext?: boolean }>`
  display: flex;
  justify-content: ${(props) =>
    props.hasPrevious && props.hasPrevious
      ? "space-between"
      : !props.hasPrevious && props.hasNext
      ? "flex-end"
      : props.hasPrevious && !props.hasNext
      ? "flex-start"
      : "flex-end"};
  margin-top: 28px;
`;

export const NextPrevButton = styled.a<{ next?: boolean }>`
  width: 45%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.next ? "flex-end" : "flex-start")};
  border: 1px solid #dadde1;
  border-radius: 0.4rem;
  transition: border 0.2s;
  background-color: #fff;
  cursor: pointer;

  :hover {
    border: 1px solid rgb(8, 126, 164);
    text-decoration: none;
  }

  p {
    color: #525860;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 2px;
  }

  span {
    color: rgb(8, 126, 164);
    font-size: 1rem;
    font-weight: 700;
  }
`;
