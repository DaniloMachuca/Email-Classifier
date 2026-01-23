import Main from "../../containers/Main";
import Sidebar from "../../containers/Sidebar";
import { Container } from "../../styles";
import MobileLayout from "../../containers/MobileLayout";
import * as S from "./styles";

const Home = () => (
  <S.Home>
    <Container>
      <MobileLayout />
      <Main />
      <Sidebar />
    </Container>
  </S.Home>
);

export default Home;
