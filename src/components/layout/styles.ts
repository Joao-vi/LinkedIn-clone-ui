import styled from "styled-components";

export const StyledLayout = styled.div`
  max-width: 1128px;
  padding: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1.5fr;
  grid-template-rows: 100px 1fr;
  gap: 20px;
  grid-template-areas:
    "left post right "
    "left feed right ";
`;
