import { Container } from "./styles";

import userAvatar from "../../assets/user-avatar.jpg";

import { BsImage } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

export function NewPost() {
  return (
    <Container>
      <header>
        <img src={userAvatar} alt="user avatar" />
        <button>Começar publicação</button>
      </header>
      <footer>
        <li>
          <BsImage /> <span>Foto</span>
        </li>
        <li>
          <MdSlowMotionVideo /> <span>Vídeo</span>
        </li>
        <li>
          <AiOutlineCalendar /> <span>Evento</span>
        </li>
        <li>
          <BsReverseLayoutTextSidebarReverse /> <span>Escrever artigo</span>
        </li>
      </footer>
    </Container>
  );
}
