import styled from "styled-components";

export const AboutProfessionalContainer = styled.section`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;

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
  }
`;

export const ContentProfessional = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
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
`;
