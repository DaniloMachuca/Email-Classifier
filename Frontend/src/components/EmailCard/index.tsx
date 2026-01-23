//Styles
import * as S from "./styles";

//Types and Actions
import type EmailClass from "../../models/EmailClass";

type Props = {
  email: EmailClass;
};

const EmailCard = ({ email }: Props) => {
  return (
    <>
      <S.EmailCard color={email.category === "Produtivo" ? "green" : "yellow"}>
        <S.Content>
          <S.cardHeader>
            <S.Title>{email.content.subject}</S.Title>
            <S.Tag>{email.category}</S.Tag>
          </S.cardHeader>
          <p>{email.content.from}</p>
          <S.Content>{email.content.body}</S.Content>
        </S.Content>
      </S.EmailCard>
    </>
  );
};

export default EmailCard;
