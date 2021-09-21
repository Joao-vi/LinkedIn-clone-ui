import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  border-radius: 5px;
  border: 1px solid hsl(0deg 0% 92%);
  padding: 5px;
  background-color: var(--painel-color);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.04);

  h3 {
    color: var(--black-color);
    font-weight: 500;
    font-size: 16px;
  }
  h4 {
    color: var(--gray-color);
    font-weight: 300;
    font-size: 14px;
  }
  header {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    gap: 5px;
    border-bottom: 1px solid hsl(0deg 0% 92%);

    .top {
      display: flex;
      gap: 5px;
      align-items: flex-start;

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
      }

      .info {
        width: 80%;
        h3 {
          color: var(--gray-color);
          font-size: 14px;
          font-weight: 300;
        }
      }
    }
    button {
      font-size: 16px;
      justify-self: center;
      border-radius: 100px;
      width: 100%;
      padding: 2px 0;
      border: 1px solid var(--blue-color);
      color: var(--blue-color);
      font-weight: 500;
      cursor: pointer;

      transition: background 0.3s ease;
      &:hover {
        background-color: var(--blue-color);
        color: #ffff;
      }
    }
  }
  .count {
    h4 {
      padding: 5px 0;
    }
    padding: 10px 0;
    border-bottom: 1px solid hsl(0deg 0% 92%);
  }
  .geren {
    h4 {
      padding: 5px 0;
    }
    border-bottom: 1px solid hsl(0deg 0% 92%);
    padding: 10px 0;
  }
  #out {
    padding: 10px 0;
    cursor: pointer;
  }
`;
