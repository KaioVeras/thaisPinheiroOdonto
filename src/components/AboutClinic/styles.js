import styled from "styled-components";

export const AboutClinicContainer = styled.section`
  padding: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container-clinic {
    width: 100%;
    max-width: 1400px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .image-clinic {
    width: 570px;
    height: 380px;
    border-radius: 10px;
    border: 3px solid #fff;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
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
    color: #4b5563
  };

  h4 {
    color: #1f2937;
  }
`;


export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    .icon {
        height: 40px;
        width: 40px;
        background-color: #EDF4F3;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #4d9388;
    }

    .item-list {
        display: flex;
        align-items: center;
        gap: 20px;
        width: 90%;
    }
`;

