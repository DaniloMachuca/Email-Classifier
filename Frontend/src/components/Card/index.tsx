//Dependencies
import { useDispatch, useSelector } from "react-redux";

//Types and Actions
import type { RootReducer } from "../../store";
import { setFilter } from "../../store/reducers/filter";

//Styles
import * as S from "./styles";

type Props = {
  label: string;
  category: "Produtivo" | "Improdutivo" | "all";
};
const Card = ({ label, category }: Props) => {
  const { emails: contact, filter } = useSelector(
    (state: RootReducer) => state,
  );
  const dispatch = useDispatch();

  const contactCounter = () => {
    if (category === "all") {
      return contact.list.length;
    }
    if (category === "Produtivo") {
      return contact.list.filter((item) => item.category === category).length;
    }
    if (category === "Improdutivo") {
      return contact.list.filter((item) => item.category === category).length;
    }
  };
  const filtering = () => {
    dispatch(setFilter({ category }));
  };
  const activeCheck = () => {
    const same = filter.category === category;
    return same;
  };

  const counter = contactCounter();
  const active = activeCheck();

  return (
    <S.Card active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  );
};

export default Card;
