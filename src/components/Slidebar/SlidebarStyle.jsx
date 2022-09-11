import styled from "styled-components";
export const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;

  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: Pacifico;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
export const ResponsiveSection = styled.section`
  @media screen and (min-width: 821px) {
    display: none;
  }
  @media screen and (max-width: 820px) {
    background-color: #212121;

    .brand {
      display: flex;
      align-items: center;
      padding-left: 4rem;
      padding-right: 4rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      justify-content: space-between;
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: Pacifico;
      }
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
    }
    .link {
      position: absolute;
      right: -100%;
      top: 0;
      z-index: 1;
      background-color: #212121;
      height: 100vh;
      width: 40%;
      display: flex;

      justify-content: center;
      margin-top: 2rem;
      transition: 0.5s;
      ul {
        list-style-type: none;

        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          margin-bottom: 2rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
    .link.active {
      right: 0;
      transition: 0.5s;
    }
  }
`;
