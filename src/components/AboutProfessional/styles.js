import styled from "styled-components";

export const AboutProfessionalContainer = styled.section`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0px;
  transition: all 0.3s;
  scroll-margin-top: 200px;

  .container-professional {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1370px;
    height: 100%;
  }

  .image {
    height: 384px;
    width: 384px;
    background-color: #eee;
    border-radius: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    object-position: top;
    border: 3px solid #fff;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 950px) {
    .image {
      width: 340px;
      height: 340px;
    }
  }

   @media (max-width: 850px) {
    scroll-margin-top: 100px;

    .container-professional {
      flex-direction: column;
      gap: 40px;
    }

    .image {
      width: 384px;
      height: 384px;
    }
  }

  @media (max-width: 500px) {
    .image {
      width: 300px;
      height: 300px;
    }
  }
`;

export const ContentProfessional = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 0 30px;

  h2 {
    font-size: 30px;
    color: #4d9388;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 20px;
    color: #374151;
    font-weight: 600;
  }

  p {
    text-align: left;
    font-size: 16px;
    color: #4b5563;
  }

  .paragraphs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }

  .paragraph-cro {
    margin-top: 24px;
    color: #4d9388;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;
