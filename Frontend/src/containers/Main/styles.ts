import styled from "styled-components";
import variables from "../../styles/variables";

export const Main = styled.main`
  padding: 20px 40px;
  display: block;
  height: 100vh;
  overflow-y: scroll;
  li {
    list-style: none;
    margin-bottom: 12px;
  }
  @media (max-width: 768px) {
    padding: 174px 40px;
  }
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
    &.visivel {
      opacity: 0;
    }
  }

  @ending-style {
    &.visivel {
      opacity:;
    }
  }

  &.visivel {
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
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  max-width: 90%;
  max-height: 90%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  .modal-header {
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .green {
      color: ${variables.colors.green};
    }
    .yellow {
      color: ${variables.colors.yellow};
    }
    span {
      text-align: right;
    }
  }
  .modal-body {
    border-top: 1px solid ${variables.colors.darkGray};
    h4 {
      margin-block: 10px;
    }
  }

  .modal-group {
    margin-bottom: 10px;
    display: grid;
    gap: 10px;

    span {
      color: ${variables.colors.darkGray};
    }
  }
  .modal-footer {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;

export const NoItems = styled.p`
  font-size: 24px;
  color: ${variables.colors.darkGray};
  text-align: center;
`;
