import { useState } from "alem";
import styled from "styled-components";

type Props = {
  title: string;
  children: React.ReactElement;
  initialState?: "open" | "closed";
  onClick?: (isOpen: boolean) => void;
};

const CollapseList = ({ title, children, initialState, onClick }: Props) => {
  const Content = styled.div<{ open: boolean }>`
    overflow: hidden;
    height: ${(props) => (props.open ? "fit-content" : "0px")};
  `;

  const TitleButton = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;

    h3:hover,
    :hover {
      color: rgb(68, 152, 224);
    }

    span {
      margin-top: 6px;
    }
  `;

  const [open, setOpen] = useState(initialState === "open");

  return (
    <>
      <TitleButton
        onClick={() => {
          if (onClick) onClick(!open);
          setOpen(!open);
        }}
      >
        <h3>{title}</h3>
        {open ? (
          <span className="material-symbols-outlined">arrow_drop_up</span>
        ) : (
          <span className="material-symbols-outlined">arrow_drop_down</span>
        )}
      </TitleButton>
      <Content open={open}>{children}</Content>
    </>
  );
};

export default CollapseList;
