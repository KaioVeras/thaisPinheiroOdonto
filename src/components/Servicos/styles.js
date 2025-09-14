import styled from "styled-components";

export const ServicosContainer = styled.section`
  background-color: #fcfcfd;
  padding: 80px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #4d9388;
    font-size: 30px;
    margin-bottom: 16px;
  }

  .descricao {
    color: #4b5563;
    font-size: 18px;
    max-width: 670px;
    width: 100%;
  }

  .secondary-button-mobile {
    width: 355px;
    height: 47px;
    background-color: #4D9388;
    border: none;
    border-radius: 4px;
    transition: all 0.3s;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #fff;
      height: 100%;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      background-color: #5BA49A;
    }
  }

  @media (max-width: 740px) {
      .secondary-button-mobile {
        width: 100%;
      }
    }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 48px 0px;
  gap: 30px;
  width: 100%;
  max-width: 1500px;

  .card {
    width: 316px;
    height: 294px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    gap: 18px;
    text-align: left;
    transition: all 0.3s;

    h3 {
      font-size: 20px;
      color: #1f2937;
    }

    p {
        color: #4b5563;
    }

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

        h3 {
            color: #4d9388;
        }
    }
  }

  .icon {
    background-color: #edf4f3;
    border-radius: 8px;
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

    @media (max-width: 1083px) {
      .card {
        width: 40%;
        min-width: 316px;
      }
    }

    @media (max-width: 740px) {
      .card {
        width: 100%;
        height: 240px;
      }
    }

    @media (max-width: 500px) {
      .card {
        height: 294px;
      }
    }
`;
