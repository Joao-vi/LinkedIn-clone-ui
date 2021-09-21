import styled from "styled-components";

export const Section = styled.section`
  padding: 15px 10px;
  border-radius: 5px;
  background-color: var(--painel-color);
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 16px;
    font-weight: 500;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      font-size: 16px;
      cursor: pointer;
    }
  }

  ul {
    li {
      margin: 5px 0;
      h4 {
        font-size: 15px;
        color: var(--black-color);
        font-weight: 500;
      }

      span {
        padding-left: 5px;
        color: var(--gray-color);
        font-weight: 300;
      }
    }
  }
`;
