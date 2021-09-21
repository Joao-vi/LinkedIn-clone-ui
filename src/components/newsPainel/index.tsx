import { Section } from "./styles";

import { BiInfoCircle } from "react-icons/bi";

export function NewsPainel() {
  return (
    <Section>
      <header>
        <h3>LinkedIn Notícias</h3>
        <BiInfoCircle />
      </header>
      <ul>
        <li>
          <h4>Covid 19: Ultimas notícias</h4>
          <span>Noticias mais lidas * 15.000 leitores</span>
        </li>
        <li>
          <h4>Covid 19: Ultimas notícias</h4>
          <span>Noticias mais lidas * 15.000 leitores</span>
        </li>
        <li>
          <h4>Covid 19: Ultimas notícias</h4>
          <span>Noticias mais lidas * 15.000 leitores</span>
        </li>
        <li>
          <h4>Covid 19: Ultimas notícias</h4>
          <span>Noticias mais lidas * 15.000 leitores</span>
        </li>
      </ul>
    </Section>
  );
}
