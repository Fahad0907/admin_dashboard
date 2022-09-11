import styled from "styled-components";
export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytics {
    border-radius: 1rem;
    background-color: #212121;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`;
