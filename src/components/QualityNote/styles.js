import styled from "styled-components";

export const QualityNoteContainer = styled.section`
  background-color: #f6f9f9;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .description-quality {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
      color: #4b9388;
      font-size: 34px;
    }

    p {
      font-size: 20px;
      color: #4b5563;
      width: 670px;
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
    width: 430px;
    height: 250px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    background-color: #fff;

    .container-icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #C9DEDB;
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

        h4 {
            color: #1b2937;
        }

        p {
            font-size: 14px;
            color: #6b7280;
        }
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

        .title-star {
            display: flex;
            gap: 10px;
        }
    }

`;