import { StyledHeader, Container } from "./styles";
import { useState } from "react";

import LinkedInLogo from "../../assets/linkedinLogo.png";
import userAvatar from "../../assets/user-avatar.jpg";

import { BiHomeAlt, BiMessageSquareDots } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

import { MenuEu } from "../MenuEu";

export function Header() {
  const [showMenuEu, SetShowMenuEu] = useState(false);

  function handleShowMenuOverlay() {
    SetShowMenuEu((prevState) => !prevState);
  }

  return (
    <Container>
      <StyledHeader>
        <div className="left-header">
          <img src={LinkedInLogo} alt="LinkedIn logo." />
          <form>
            <input type="text" placeholder="Pesquisar" />
            <AiOutlineSearch />
          </form>
        </div>

        <div className="right-header">
          <nav>
            <a href="/">
              <BiHomeAlt />
              <span>Início</span>
            </a>
            <a href="/">
              <BsFillPeopleFill />
              <span>Minha rede</span>
            </a>
            <a href="/">
              <MdWork />
              <span>Vagas</span>
            </a>
            <a href="/">
              <BiMessageSquareDots />
              <span>Mensagens</span>
            </a>
            <a href="/">
              <IoNotifications />
              <span>Notificações</span>
            </a>
            <button id="btn-show-menu-eu" onClick={handleShowMenuOverlay}>
              <img src={userAvatar} alt="Avatar" />
              <span>
                Eu <IoMdArrowDropdown />
              </span>
              {showMenuEu && <MenuEu />}
            </button>
          </nav>
          <div className="config">
            <a href="/">
              <IoMdSettings />
              <span>
                Soluções
                <IoMdArrowDropdown />
              </span>
            </a>
          </div>
        </div>
      </StyledHeader>
    </Container>
  );
}
