import styled from "styled-components";
import variables from "../../styles/variables";

type Props = {
  color?: string;
};

export const Tag = styled.span`
  font-weight: bold;
  font-size: 16px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 14px;
    margin-top: 4px;
  }
`;

export const EmailCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
  height: 150px;
  border: 3px solid
    ${(props: Props) =>
      props.color === "green"
        ? variables.colors.green
        : variables.colors.yellow};
  background-color: #fcfcfc;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  ${Tag} {
    transition: all 0.2s ease-in-out;

    color: ${(props: Props) =>
      props.color === "green"
        ? variables.colors.green
        : variables.colors.yellow};
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);

    ${Tag} {
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${variables.colors.darkGray};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const content = styled.p`
  font-size: 14px;
  color: ${variables.colors.gray};
`;

export const cardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
