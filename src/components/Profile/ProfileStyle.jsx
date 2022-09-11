import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #212121;
  padding: 2rem 2rem 3rem 2rem;
  border-radius: 1rem;
  .top {
    display: flex;
    flex-direction: column;
    .image {
      margin: 0 auto;
      img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        transition: transform 0.5s;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    .title {
      color: #ffc107;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      h1 {
        font-family: Pacifico;
        letter-spacing: 0.2rem;
      }
      h5 {
        font-family: "Dosis", sans-serif;
        letter-spacing: 0.1rem;
      }
    }
    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1rem;
      .info_title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h5,
        h3 {
          color: white;
          font-family: "Dosis", sans-serif;
          letter-spacing: 0.1rem;
        }
      }
    }
  }
`;
