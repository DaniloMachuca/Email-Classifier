import styled, { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    overflow-y: hidden;
    height: 100vh;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 348px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const TextBox = styled.input`
  padding: 18px 12px;
  background-color: ${variables.colors.white};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${variables.colors.darkGray};
  border-color: ${variables.colors.gray};
  width: 100%;
  border: 2px solid ${variables.colors.gray};
`;
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Btn = styled.button`
  font-size: 14px;
  color: ${variables.colors.white};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.colors.darkGray};
  border-radius: 8px;
  margin-right: 8px;
`;

export const BtnRed = styled(Btn)`
  background-color: ${variables.colors.red};
  transition: background-color 0.1s ease-in;
  &:hover {
    background-color: ${variables.colors.darkRed};
    transition: background-color 0.1s ease-in;
  }
`;
export const BtnBlue = styled(Btn)`
  background-color: ${variables.colors.blue};
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${variables.colors.darkBlue};
    transition: background-color 0.1s ease-in;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 24px;
`;

export default GlobalStyle;
