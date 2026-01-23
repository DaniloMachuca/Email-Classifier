//Dependencies
import { useDispatch } from "react-redux";

//Types and Actions
import { setQuery } from "../../store/reducers/filter";

//Styles and Components
import Card from "../../components/Card";
import { TextBox } from "../../styles";
import * as S from "./styles";

const MobileLayout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <S.HeaderContainer>
        <TextBox
          placeholder="Buscar"
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
        <S.HamburgerMenu>
          <Card label="Todos" category="all" />
          <Card label="Produtivo" category="Produtivo" />
          <Card label="Improdutivo" category="Improdutivo" />
        </S.HamburgerMenu>
      </S.HeaderContainer>
      <S.AddButton to="/new">+</S.AddButton>
    </>
  );
};

export default MobileLayout;
