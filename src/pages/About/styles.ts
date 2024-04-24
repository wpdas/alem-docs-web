import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;

  h1 {
    border-bottom: none;
  }
`;

export const Logo = styled.img`
  pointer-events: none;
  margin-bottom: 20px;
  border-radius: 999px;
`;

export const Title = styled.h1`
  font-size: 42px !important;
  margin-bottom: 14px;
`;

export const Description = styled.h3`
  font-size: 28px !important;
  font-weight: 600;
  color: rgb(67 74 90);
  margin-bottom: 34px;
`;

export const CustomAnchor = styled.div`
  display: flex;
  a {
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: rgb(35 39 47);
    font-weight: 700;
    font-size: 17px;

    :hover {
      background-color: #fafafa;
    }
  }
`;

export const CustomLink = styled.a`
  display: flex;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  border: 1px solid rgb(8 126 164);
  background-color: rgb(8 126 164);
  margin-right: 12px;
  text-decoration: none;

  p {
    color: #fff !important;
    margin: 0;
    font-weight: 700 !important;
    font-size: 17px;
  }

  :hover {
    background-color: rgb(8 116 154);
  }
`;

export const Section = styled.div`
  background-color: rgb(188 193 205 / 12%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 20px;
  align-items: center;
  text-align: center;

  h1 {
    border-bottom: none;
    padding-bottom: 0;
  }

  ul {
    list-style-type: none;
  }

  p,
  li {
    font-size: 20px;
    color: rgb(67 74 90);
    line-height: 1.5;
    max-width: 48rem;
    font-weight: 500;
    margin-top: 1.75rem;
  }
`;

export const Code = styled.span`
  background-color: rgba(208, 211, 220, 0.4);
  border-radius: 0.5rem;
  border: 0 solid #e5e7eb;
  color: rgb(67 74 90);
  padding: 0.125rem 0.25rem;
`;

export const BlueCode = styled.span`
  background-color: rgba(164, 187, 232, 0.4);
  border-radius: 0.5rem;
  border: 0 solid #e5e7eb;
  color: rgb(67 74 90);
  padding: 0.125rem 0.25rem;
`;

export const RedCode = styled.span`
  background-color: rgba(223, 139, 142, 0.3);
  border-radius: 0.5rem;
  border: 0 solid #e5e7eb;
  color: rgb(67 74 90);
  padding: 0.125rem 0.25rem;
`;

export const AppsList = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ExampleApp = styled.a`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  img {
    border-radius: 8px;
    height: 60px;
  }
  span {
    margin-top: 12px;
    color: rgb(35, 39, 47);
    font-weight: 600;
    text-decoration: none;
  }
`;
