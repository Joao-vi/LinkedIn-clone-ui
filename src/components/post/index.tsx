import {
  BiWorld,
  BiLike,
  BiCommentDetail,
  BiShare,
  BiSend,
} from "react-icons/bi";

import logoUser from "../../assets/linkedin.png";

import { Container } from "./styles";

export function Post() {
  return (
    <Container>
      <header>
        <img src={logoUser} alt="User avatar" />
        <div className="info">
          <h2>LinkedIn</h2>
          <span>120.000 seguidores </span>
          <div className="bottom">
            <span>1 m </span>
            <span>Editado</span>
            <BiWorld />
          </div>
        </div>
      </header>

      <main>
        <p>
          How does your first job compare to (or differ from) what you’re doing
          now?
        </p>
      </main>
      <footer>
        <div className="reactions">
          <li className="blue"></li>
          <li className="red"></li>
          <li className="green"></li>
          <span>1.260</span>
        </div>
        <div className="action">
          <li>
            <BiLike />
            <span>Gostei</span>
          </li>
          <li>
            <BiCommentDetail />
            <span>Comentar</span>
          </li>
          <li>
            <BiShare />
            <span>Compartilhar</span>
          </li>
          <li>
            <BiSend />
            <span>Enviar</span>
          </li>
        </div>
      </footer>
    </Container>
  );
}
