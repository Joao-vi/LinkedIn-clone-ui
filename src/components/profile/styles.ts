import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: left;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: var(--painel-color);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgb(235 235 235);

  span {
    color: var(--gray-color);
    font-size: 14px;
  }
  header {
    display: flex;
    flex-direction: column;
    text-align: center;
    border-bottom: 1px solid rgb(235 235 235);
    padding-bottom: 10px;
    .top {
      padding: 0;
      img {
        width: 100%;
      }
    }
    img.user-avatar {
      width: 70px;
      height: 70px;
      object-fit: cover;
      align-self: center;
      border-radius: 50%;
      margin-top: -30px;
      border: 2px solid #ffff;
      margin-bottom: 15px;
    }
    span {
      font-weight: 300;
    }
  }

  .contections {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid rgb(235 235 235);
    .item {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;

      span {
        font-weight: 500;
      }
      .number {
        color: var(--blue-color);
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
      font-size: 15px;
    }
    padding: 10px 5px;
  }
`;

export const Painel = styled.div`
  position: sticky;
  top: 65px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  padding: 10px 0;
  border: 1px solid rgb(235 235 235);
  background-color: var(--painel-color);

  h3 {
    color: var(--blue-color);
    padding-left: 5px;
    font-weight: 500;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    span {
      display: flex;
      flex-direction: flex;
      gap: 5px;
      color: var(--gray-color);
      cursor: pointer;
      font-size: 13px;
      transition: all 0.3s ease;
      padding: 5px;
      font-weight: 500;

      &:hover {
        background-color: rgb(235 235 235);
        color: var(--black-color);
      }
    }
  }
  footer {
    border-top: 1px solid rgb(235 235 235);
    padding-top: 10px;
    text-align: center;
    span {
      font-size: 16px;
      font-weight: 500;
      color: var(--gray-color);
      cursor: pointer;
    }
  }
`;
