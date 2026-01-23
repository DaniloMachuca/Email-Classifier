//Dependencies
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

//Types and Actions
import type EmailClass from "../../models/EmailClass";
import type { RootReducer } from "../../store";
import { removeEmail } from "../../store/reducers/emails";

//Styles and Components
import EmailCard from "../../components/EmailCard";
import { BtnBlue, BtnRed } from "../../styles";
import * as S from "./styles";

interface ModalState extends EmailClass {
  isOpen: boolean;
}

const Main = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootReducer) => state.emails);
  const { category, query } = useSelector((state: RootReducer) => state.filter);
  const [modal, setModal] = useState<ModalState>({
    id: "",
    source: "",
    category: "",
    suggestion: "",
    reason: "",
    content: { subject: "", body: "", from: "" },
    isOpen: false,
  });

  const listFilter = () => {
    let filteredItens = list;
    if (query !== undefined) {
      filteredItens = filteredItens.filter(
        (item) =>
          item.reason.toLocaleLowerCase().search(query.toLocaleLowerCase()) >=
            0 ||
          item.content.body
            .toLocaleLowerCase()
            .search(query.toLocaleLowerCase()) >= 0 ||
          item.content.subject
            .toLocaleLowerCase()
            .search(query.toLocaleLowerCase()) >= 0 ||
          item.content.from
            .toLocaleLowerCase()
            .search(query.toLocaleLowerCase()) >= 0,
      );
      if (category !== "all") {
        filteredItens = filteredItens.filter(
          (item) => item.category === category,
        );
      }
      return filteredItens;
    } else {
      return list;
    }
  };

  const itens = listFilter();

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
    setTimeout(() => {
      setModal({
        id: "",
        source: "",
        category: "",
        suggestion: "",
        reason: "",
        content: { subject: "", body: "", from: "" },
        isOpen: false,
      });
    }, 200);
  };

  const removeItem = () => {
    dispatch(removeEmail(modal.id));
    closeModal();
  };
  return (
    <S.Main>
      {itens.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            setModal({ ...item, isOpen: true });
            console.log(modal);
          }}
        >
          <EmailCard email={item} />
        </li>
      ))}
      {itens.length === 0 && <S.NoItems>Nenhum email encontrado</S.NoItems>}
      <S.Modal className={modal.isOpen ? "visivel" : ""}>
        <S.ModalContent>
          <div className="modal-header">
            <h4>Email de: {modal.content.from}</h4>
            <span>
              Prioridade:{" "}
              <span
                className={modal.category === "Produtivo" ? "green" : "yellow"}
              >
                {modal.category}
              </span>
            </span>
          </div>
          <div className="modal-body">
            <h4>Dados do email</h4>
            <div className="modal-group">
              <span>Assunto: </span>
              <p>{modal.content.subject}</p>
            </div>
            <div className="modal-group">
              <span>Corpo: </span>
              <p>{modal.content.body}</p>
            </div>
          </div>
          <div className="modal-body">
            <h4>Sugestão de Ação</h4>
            <div className="modal-group">
              <span>Sugestão de resposta: </span>
              <p>{modal.suggestion}</p>
            </div>
            <div className="modal-group">
              <span>Razão: </span>
              <p>{modal.reason}</p>
            </div>
          </div>
          <div className="modal-footer">
            <BtnBlue onClick={removeItem}>Marcar como resolvido</BtnBlue>
            <BtnRed onClick={closeModal}>Fechar</BtnRed>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </S.Main>
  );
};

export default Main;
