import styled from "styled-components";

export const QualityNoteContainer = styled.section`
  background-color: #f6f9f9;
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 40px;

  .description-quality {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
      color: #4b9388;
      font-size: 34px;
      word-wrap: break-word;
    }

    p {
      font-size: 20px;
      color: #4b5563;
      width: 670px;
    }
  }

  @media (max-width: 890px) {
    .description-quality {
      h1 {
        font-size: 30px;
      }

      p {
        width: 100%;
      }
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 64px;
  gap: 30px;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  width: 390px;
  height: 250px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .container-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #c9dedb;
  }

  .coment {
    color: #374151;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 15px;
    margin: 15px 0;
    text-align: left;
  }

  .author {
    align-self: flex-start;
    text-align: left;

    h3 {
      color: #1b2937;
      font-size: 16px;
    }

    p {
      font-size: 14px;
      color: #6b7280;
    }
  }

  @media (max-width: 890px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`;

export const NotesGoogle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 672px;
  height: 208px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 48px;
  padding: 32px;
  gap: 20px;

  h4 {
    font-weight: 500;
  }

  h3 {
    font-size: 24px;
    color: #1f2937;
  }

  p {
    color: #4b5563;
  }

  .stars-google {
    display: flex;
    align-items: center;
    color: #4b9388;
    gap: 20px;

    .title-star .icon-star {
      margin-right: 2px;
      text-align: center;
      vertical-align: sub;
    }
  }

  @media (max-width: 890px) {
    width: 90%;
    height: auto;
  }
 
  @media (max-width: 500px) {
    width: 100%;
  }
`;
