import styled from "styled-components";
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: white;
  .title {
    margin-left: 2.1rem;
    h1 {
      font-family: "Dosis", sans-serif;
      letter-spacing: 0.1rem;
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        letter-spacing: 0.2rem;
        font-family: Pacifico;
      }
    }
    h4 {
      font-family: "Dosis", sans-serif;
      letter-spacing: 0.1rem;
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 1rem;
    margin-right: 2rem;
    width: 15rem;
    svg {
      color: #ffc107;
      margin-left: 1rem;
    }
    input {
      background: transparent;
      border: none;
      &::placeholder {
        color: #ffc107;
      }
      &:focus {
        outline: none;
      }
    }
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 1rem;
    .search {
      width: 90%;
      margin-left: 2rem;
      padding: 1rem;
    }
  }
`;
