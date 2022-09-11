import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 2rem 2rem 3rem 2rem;
  border-radius: 1rem;
  background-color: #212121;
  .title {
    color: #ffc107;
    display: flex;
    align-items: center;
    h1 {
      font-family: Pacifico;
      letter-spacing: 0.5rem;
      font-size: 1.8rem;
    }
  }
  .transferInfo {
    display: flex;
    flex-direction: column;
    .transfer_details {
      display: flex;
      margin-bottom: 1rem;
      justify-content: space-between;
      .transfer_details_title {
        display: flex;

        img {
          height: 45px;
          width: 45px;
          border-radius: 50%;
        }
        .heading {
          margin-left: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          h3,
          h6 {
            font-family: "Dosis", sans-serif;
            letter-spacing: 0.1rem;
          }
        }
      }
      .amount {
        background-color: #d7e41e1d;
        padding: 1rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .view {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h3 {
      color: #ffc107;
      font-weight: bold;
    }
    svg {
      color: #ffc107;
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
`;
