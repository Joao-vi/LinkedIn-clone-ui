import { Container } from "./styles";

import userAvatar from "../../assets/user-avatar.jpg";

export function MenuEu() {
  return (
    <Container>
      <header>
        <div className="top">
          <img src={userAvatar} alt="User avatar" />
          <div className="info">
            <h2>João Victor Gonçalves Rodrigues</h2>
            <h3>Desenvolvedor Front end</h3>
          </div>
        </div>
        <button>Visualizar perfil</button>
      </header>
      <div className="count">
        <h3>Conta</h3>
        <h4>Configurações</h4>
        <h4>Ajuda</h4>
        <h4>Idioma</h4>
      </div>
      <div className="geren">
        <h3>Gerenciar</h3>
        <h4>Publicações</h4>
        <h4>Conta de anúncio de vaga</h4>
      </div>
      <h4 id="out">Sair</h4>
    </Container>
  );
}
