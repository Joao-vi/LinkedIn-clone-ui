import { Section } from "./styles";

import { NewsPainel } from "../newsPainel";
import { Footer } from "../footer";

export function RigthSide() {
  return (
    <Section>
      <NewsPainel />
      <Footer />
    </Section>
  );
}
