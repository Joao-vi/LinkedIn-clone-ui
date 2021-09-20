import bgUser from "../../assets/bg-user.jpg";
import userAvatar from "../../assets/user-avatar.jpg";

import { IoMdArchive } from "react-icons/io";

import { Container, Painel, Wrapper } from "./styles";
export function Profile() {
  return (
    <Wrapper>
      <Container>
        <header>
          <div className="top">
            <img src={bgUser} alt="user background" />
          </div>
          <img className="user-avatar" src={userAvatar} alt="user avatar" />
          <h2>João Victor Gonçalves Rodrigues</h2>
          <span>Desenvolvedor Front end</span>
        </header>
        <div className="contections">
          <div className="item">
            <span>Conexões</span>
            <span className="number">72</span>
          </div>
          <div className="item">
            <span>Quem viu seu perfil </span>
            <span className="number">10</span>
          </div>
        </div>
        <footer>
          <IoMdArchive />
          <span>Meus itens</span>
        </footer>
      </Container>
      <Painel>
        <div>
          <h3>Recentes</h3>
          <span> Vagas de TI</span>
        </div>
        <div>
          <h3>Grupos</h3>
          <span> Vagas de TI</span>
        </div>
        <h3>Eventos</h3>
        <h3>Hashtags seguidas</h3>
        <footer>
          <span>Descubra mais</span>
        </footer>
      </Painel>
    </Wrapper>
  );
}
