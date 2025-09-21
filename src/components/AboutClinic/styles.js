import styled from "styled-components";

export const AboutClinicContainer = styled.section`
  padding: 80px 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 150px;

  .container-clinic {
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  .image-clinic {
    width: 580px;
    height: 400px;
    border-radius: 10px;
    border: 3px solid #fff;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    .image-clinic {
      width: 45%;
    }
  }

  @media (max-width: 1050px) {
    padding: 80px 80px;

    .image-clinic {
      width: 100%;
      height: 450px;
    }

    .container-clinic {
      flex-direction: column;
      gap: 50px;
    }
  }

  @media (max-width: 760px) {
    padding: 80px 30px;
  }

  @media (max-width: 500px) {
    .image-clinic {
      height: 320px;
    }
  }
`;

export const DescriptionClinic = styled.div`
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #4d9388;
  }

  .paragraph-title {
    color: #374151;
    font-size: 18px;
  }

  p {
    color: #4b5563;
  }

  h4 {
    color: #1f2937;
  }

  @media (max-width: 1050px) {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 34px;
    }
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  text-align: left;

  .icon {
    color: #4b9388;
  }

  .item-list {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
