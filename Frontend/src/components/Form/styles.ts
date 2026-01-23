import styled from "styled-components";
import variables from "../../styles/variables";
import { Title } from "../../styles";
import { Link } from "react-router-dom";

export const FileLabel = styled.span`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
  padding: 12px;
  background-color: ${variables.colors.gray};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${variables.colors.black};
  border: 2px solid ${variables.colors.darkGray};
  cursor: pointer;
  transition: all 0.1s ease;
  display: inline-block;
  &:hover {
    background-color: ${variables.colors.white};
    color: ${variables.colors.darkGray};
    transition: all 0.1s ease;
  }

  &.drag-active {
    height: 150px;
    border-color: ${variables.colors.blue};
    background-color: ${variables.colors.white};
    color: ${variables.colors.darkBlue};
    font-size: 18px;
  }
  &.drag-reject {
    border-color: ${variables.colors.red};
    color: ${variables.colors.red};
    background-color: transparent;

    &:hover {
      background-color: ${variables.colors.lighRed};
    }
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  background-color: ${variables.colors.white};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${variables.colors.darkGray};
  border-color: ${variables.colors.gray};
  width: 100%;
  border: 2px solid ${variables.colors.gray};
  min-height: 100px;
  resize: none;
`;

export const FileInput = styled.input`
  display: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 16px;
  background-color: ${variables.colors.lightBlue};
  padding: 16px;
  border: 2px solid ${variables.colors.gray};
  border-radius: 8px;
  min-height: 90vh;
  justify-content: space-between;
  text-align: center;

  ${Title} {
    text-align: center;
  }
`;

export const FormDescription = styled.p`
  font-size: 16px;
  color: ${variables.colors.darkGray};
  margin-block: 16px;
  text-align: center;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background-color: ${variables.colors.blue};
  border-radius: 8px;
  font-size: 18px;
  color: ${variables.colors.white};
  width: 100%;
  border: 2px solid ${variables.colors.blue};
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: transparent;
    color: ${variables.colors.blue};
    transition: all 0.1s ease;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Files = styled.ul`
  overflow-y: auto;
  max-height: 50vh;
  margin-block: 12px;
  padding-right: 8px;
`;

export const FileItem = styled.li`
  list-style-type: none;
  font-size: 14px;
  color: ${variables.colors.darkGray};
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
  border: 1px solid ${variables.colors.gray};
  padding: 8px;
  display: flex;
  justify-content: space-between;
  word-wrap: normal;
`;

export const CloseIcon = styled.span`
  cursor: pointer;
  font-weight: bold;
  color: ${variables.colors.red};
`;

export const Modal = styled.div`
  position: fixed;
  top: -50px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  visibility: hidden;
  align-items: center;
  justify-content: center;
  opacity: 0;
  display: flex;
  transition:
    opacity 0.2s ease-in,
    visibility 0.2s allow-discrete;

  @starting-style {
    &.visible {
      opacity: 0;
    }
  }

  @ending-style {
    &.visible {
      opacity:;
    }
  }

  &.visible {
    visibility: visible;
    display: flex;
    opacity: 1;
    transition: opacity 0.2s ease;
  }

  .overlay {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    &:hover {
      cursor: pointer;
    }
  }

  .spinner {
    z-index: 2;
    transform: scale(2);
  }
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  max-width: 90%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  font-size: 20px;
  text-align: center;

  &.hidden {
    display: none;
  }

  p.success {
    color: ${variables.colors.green};
  }

  p.error {
    color: ${variables.colors.red};
  }
`;

export const CancelButton = styled(Link)`
  padding: 12px;
  background-color: ${variables.colors.darkGray};
  border-radius: 8px;
  font-size: 18px;
  color: ${variables.colors.white};
  width: 100%;
  border: 2px solid ${variables.colors.darkGray};
  cursor: pointer;
  transition: all 0.1s ease;
  text-decoration: none;
  margin: 0;

  &:hover {
    background-color: transparent;
    color: ${variables.colors.darkGray};
    transition: all 0.1s ease;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  &:active {
    color: ${variables.colors.white};
  }
`;

export const buttonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  gap: 8px;
`;
