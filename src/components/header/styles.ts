import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--painel-color);
`;

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  max-width: 1128px;
  margin: 0 auto;
  width: 100%;
  padding: 5px 30px 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-header {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 30px;
      height: 30px;
    }

    form {
      display: flex;
      align-items: center;
      background-color: var(--bg-color);
      padding: 4px 10px;
      width: 150px;
      transition: all 0.3s ease;
      &:focus-within {
        width: 240px;
      }
      border-radius: 5px;
      svg {
        font-size: 17px;
      }
      input {
        width: 100%;
        background-color: transparent;
        height: 30px;
        border: none;
        border-radius: 5px;
        padding: 5px 0 5px 10px;
        font-size: 15px;
        outline: none;
      }
    }
  }
  .right-header {
    display: flex;
    gap: 10px;
    nav {
      display: flex;
      align-items: center;
      gap: 5px;

      border-right: 2px solid var(--bg-color);

      a,
      button {
        display: flex;
        flex-direction: column;
        align-items: center;

        font-size: 15px;
        font-weight: 300;

        text-decoration: none;
        color: var(--gray-color);
        font-style: none;
        border-bottom: 1px solid transparent;
        padding: 0 10px;

        transition: color 0.3s ease;

        border: none;
        background-color: transparent;
        &:hover {
          color: var(--black-color);
        }

        &.active {
          border-bottom: 1px solid var(--black-color);
        }
        span {
          display: flex;
          align-items: center;
        }

        img {
          width: 30px;
          height: 30px;
          object-fit: cover;
          border-radius: 50%;
        }

        svg {
          font-size: 25px;
        }
      }
    }

    .config {
      display: flex;
      align-items: center;
      gap: 10px;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--gray-color);
        transition: color 0.3s ease;
        &:hover {
          color: var(--black-color);
        }

        span {
          display: flex;
          align-items: center;
        }
      }

      svg {
        font-size: 25px;
      }
      &:last-child {
        max-width: 70px;
      }
    }
  }
`;

export const ContainerUserInfo = styled.div`
  position: absolute;
  width: 262px;
  border-radius: 5px;
  background-color: var(--painel-color);
  padding: 5px;

  header {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .top {
      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 50%;
      }
      display: flex;
      gap: 5px;
      justify-content: flex-start;
    }

    a {
      width: 100%;
      border: 1px solid var(--blue-color);
      color: var(--blue-color);

      &:hover {
        color: #fff;
        background-color: var(--blue-color);
      }
    }
  }
`;
