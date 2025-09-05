import styled from 'styled-components';

export const HeroSectionContainer = styled.section`
    background-color: #FCFCFD;
    height: 950px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .hero-content {
        max-width: 900px;
        text-align: center;
    }

    .hero-title {
        h1 {
            font-size: 60px;
            line-height: 1.1;
        }

        .hero-title-color {
            color: #4D9388;
        }
    }

    .hero-description {
        font-size: 20px;
        color: #4b5563;
        width: 770px;
        margin-top: 16px;
    }

    .hero-cards {
        display: flex;
        justify-content: space-around;
        margin-top: 32px;
        gap: 15px;
    }

    .container-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 32px;
    }
`;


export const HeroCard = styled.div`
    background-color: #fff;
    height: 96px;
    width: 250px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p {
        font-size: 14px;
    }

    .icons {
        background-color: #EDF4F3;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 8px;
    }
`;
