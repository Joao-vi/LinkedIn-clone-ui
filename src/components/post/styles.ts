import styled from "styled-components";

export const Container = styled.section`
  padding: 10px 10px;
  background-color: var(--painel-color);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid rgb(235 235 235);

  color: var(--gray-color);
  header {
    display: flex;
    gap: 5px;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
    span {
      font-weight: 300;
    }
    .info {
      display: flex;
      flex-direction: column;
      font-size: 11px;
      h2 {
        color: var(--black-color);
        font-size: 15px;
      }

      svg {
        font-size: 15px;
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  main {
    width: 100%;
    padding: 10px 0;
    font-size: 15px;
    color: var(--black-color);
  }

  footer {
    display: flex;
    flex-direction: column;
    .reactions {
      display: flex;
      padding: 10px 0;
      align-items: center;
      border-bottom: 1px solid rgb(235 235 235);
      gap: 5px;
      font-size: 13px;
      .blue {
        width: 15px;
        height: 15px;
        background-color: rgb(55 143 233);
        border-radius: 50%;
      }
      .red {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: rgb(223 112 77);
      }
      .green {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: rgb(109 174 79);
      }
    }

    .action {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 10px;

      li {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        font-size: 16px;
        span {
          font-weight: 500;
        }
        svg {
          font-size: 20px;
        }
      }
    }
  }
`;
