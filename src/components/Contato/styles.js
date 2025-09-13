import styled from 'styled-components';

export const ContatoContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 80px 0;

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
`;

export const ContatoContent = styled.div`
    display: flex;
    flex-direction: column;

    .dados-content {
        display: flex;
        flex-direction: column;
        gap: 32px;
    };
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
`;

export const Content = styled.div`
    display: flex;
    gap: 20px;

    .icon {
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
`;

export const TimeContent = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;

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
        };
    }
`;  