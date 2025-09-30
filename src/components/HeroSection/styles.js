import styled from 'styled-components';

export const HeroSectionContainer = styled.section`
    background-color: #FCFCFD;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 900px;
    width: 100%;
    padding: 0px 30px;
    scroll-margin-top: 40px;

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
        margin-top: 20px;
    }

    .hero-cards {
        display: flex;
        margin-top: 32px;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .container-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 32px;
    }

    @media (max-width: 840px) {
        .hero-cards {
            justify-content: center;
        }

        .hero-description {
            width: 100%;
        }

        .hero-title h1 {
            font-size: 48px;
        }
    }

    @media (max-width: 700px) {
        .hero-cards {
            flex-direction: column;
            align-items: center;
        }

        .container-buttons {
            flex-direction: column;
            align-items: center;
        }
    }

    @media (max-width: 500px) {
        .hero-title h1 {
            font-size: 36px;
        }

        .hero-description {
            font-size: 18px;
        }
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
    transition: all 0.3s;

    p {
        font-size: 14px;
    }

    h2 {
        font-size: 16px;
        color: #111827;
    }

    .icons {
        background-color: #EDF4F3;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 8px;
    }

    @media (max-width: 700px) {
        width: 90%;
        gap: 60px;
    }

    @media (max-width: 500px) {
        width: 100%;
        justify-content: space-evenly;
        gap: 0px;
    }
`;

export const ButtonServices = styled.button`
    width: 360px;
    height: 48px;
    border-radius: 30px;
    border: 1px solid #4D9388;
    background-color: transparent;
    color: #4D9388;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: #4D9388;
        color: #fff;
    }
`;