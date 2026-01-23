import styled from "styled-components";
import variables from "../../styles/variables";
import { Link } from "react-router-dom";

export const Circle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${variables.colors.white};
  color: ${variables.colors.blue};
  border: 2px solid ${variables.colors.blue};
  font-size: 20px;
  height: 64px;
  border-radius: 10px;
  text-decoration: underline transparent;
  transition: text-decoration 0.2s ease-in;

  &:hover {
    text-decoration: underline;
    transition: text-decoration 0.2s ease-in;
  }
`;
