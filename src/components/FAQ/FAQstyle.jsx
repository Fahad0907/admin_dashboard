import styled from "styled-components";
export const Section = styled.section`
  border-radius: 1rem;
  padding: 1rem 2rem 3rem 2rem;
  background-color: #212121;
  color: white;
  .title {
    h2 {
      margin-left: 0.5rem;
      color: #ffc107;
      letter-spacing: 0.2rem;
      font-family: "Dosis", sans-serif;
      font-size: 1.25rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
    .faq {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-child(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
`;
