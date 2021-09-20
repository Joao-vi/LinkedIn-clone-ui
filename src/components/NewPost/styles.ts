import styled from "styled-components";

export const Container = styled.div`
  grid-area: post;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  color: rgb(102 102 102);
  header {
    display: flex;
    align-items: center;
    gap: 5px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
    }

    button {
      padding: 10px 15px;
      text-align: start;
      background-color: transparent;
      cursor: pointer;
      width: 100%;
      border: 1px solid rgb(178 178 178);
      border-radius: 40px;
      color: rgb(102 102 102);
    }
  }

  footer {
    display: flex;
    gap: 20px;

    li {
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: rgb(235 235 235);
      }

      svg {
        font-size: 20px;
      }
      span {
        font-size: 14px;
      }
    }
  }
`;
