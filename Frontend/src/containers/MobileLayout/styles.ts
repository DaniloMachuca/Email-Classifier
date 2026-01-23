import styled from "styled-components";
import { TextBox } from "../../styles";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: none;
  @media (max-width: 768px) {
    padding: 16px 0;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    ${TextBox} {
      width: 90%;
      margin-bottom: 12px;
    }
  }
`;

export const HamburgerMenu = styled.div`
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2%;
`;

export const AddButton = styled(Link)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: #007bff;
  color: #fff;
  padding: 12px 16px;
  border-radius: 50%;
  text-decoration: none;
  font-size: 24px;
`;
