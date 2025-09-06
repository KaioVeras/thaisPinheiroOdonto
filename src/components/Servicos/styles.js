import styled from "styled-components";

export const ServicosContainer = styled.section`
  background-color: #fcfcfd;
  padding: 80px 0px;
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
    width: 670px;
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
    gap: 22px;
    text-align: left;
    transition: all 0.3s;

    h3 {
      font-size: 20px;
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
`;
