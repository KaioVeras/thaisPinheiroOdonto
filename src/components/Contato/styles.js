import styled from "styled-components";

export const ContatoContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px 30px;
  scroll-margin-top: 40px;

  .description-contato {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    h1 {
      color: #4b9388;
      font-size: 34px;
    }

    p {
      font-size: 20px;
      color: #4b5563;
      width: 670px;
      margin-bottom: 60px;
    }
  }

  @media (max-width: 650px) {
    .description-contato {
      h1 {
        font-size: 30px;
      }

      p {
        width: 100%;
      }
    }
  }
`;

export const ContatoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .dados-content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 1230px) {
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 140px;

  .map-container {
    iframe {
      border-radius: 20px;
    }
  }

  @media (max-width: 1320px) {
    gap: 50px;
  }

  @media (max-width: 1230px) {
    flex-direction: column;
  }

  @media (max-width: 680px) {
    .map-container {
      width: 100%;
      iframe {
        width: 100%;
      }
    }
  }

  @media (max-width: 500px) {
    .map-container {
      height: 400px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 20px;

  .icon,
  .icon-map {
    color: #4b9388;
    margin-top: 3px;
  }

  .content-item {
    text-align: left;
    cursor: pointer;

    icon {
      color: red;
    }

    h4 {
      color: #1f2937;
    }

    p {
      color: #4b5563;
    }

    &:hover {
      h4 {
        color: #4b9388;
      }
    }
  }

  @media (max-width: 500px) {
    .icon-map {
      font-size: 28px;
      width: 28px;
      height: 28px;
    }
  }

  @media (max-width: 460px) {
    .icon-map {
      font-size: 32px;
      width: 32px;
      height: 32px;
    }
  }
`;

export const TimeContent = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  .card-time {
    height: 130px;
    width: 512px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 24px;
    text-align: left;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    h4 {
      color: #1f2937;
      margin-bottom: 8px;
    }

    p {
      color: #4b5563;
    }
  }

  @media (max-width: 1230px) {
    width: 50%;

    .card-time {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;

    .card-time {
      width: 600px;
    }
  }

  @media (max-width: 680px) {
    .card-time {
      width: 100%;
    }
  }
`;
