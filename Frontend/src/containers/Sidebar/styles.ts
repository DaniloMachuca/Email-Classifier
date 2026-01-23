import styled from "styled-components";
import variables from "../../styles/variables";

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variables.colors.lightBlue};
  position: fixed;
  top: 0;
  right: 0;
  width: 348px;
  height: 100vh;
  overflow-y: auto;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`;
