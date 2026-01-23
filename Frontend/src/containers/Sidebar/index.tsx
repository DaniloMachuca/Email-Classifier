//Dependencies
import { useDispatch } from "react-redux";

//Tyles and Actions
import { setQuery } from "../../store/reducers/filter";

//Styles and Components
import Card from "../../components/Card";
import BtnAdd from "../../components/AddBtn";
import { TextBox } from "../../styles";
import * as S from "./styles";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <S.Aside>
      <div>
        <TextBox
          placeholder="Buscar"
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
        <S.Filters>
          <Card label="Todos" category="all" />
          <Card label="Produtivo" category="Produtivo" />
          <Card label="Improdutivo" category="Improdutivo" />
        </S.Filters>
      </div>
      <BtnAdd />
    </S.Aside>
  );
};

export default Sidebar;
