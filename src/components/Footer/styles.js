import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #111827;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 30px;
`;

export const FooterContent = styled.div`
    width: 100%;
    display: flex;
    gap: 180px;
    justify-content: center;
    flex-wrap: wrap;

    .links-footer {
        display: flex;
        gap: 80px;
    }

    .divider-links {
        display: flex;
        gap: 150px;
    }

    @media (max-width: 1420px) {
        gap: 100px;

        .links-footer {
            gap: 50px;
        }

        .divider-links {
            gap: 100px;
        }
    }

    @media (max-width: 1260px) {
        gap: 50px;

        .links-footer {
            gap: 10px;
        }

        .divider-links {
            gap: 50px;
        }
    }

    @media (max-width: 1115px) {
        gap: 100px;
        justify-content: center;

        .links-footer {
            flex-direction: column;
            gap: 40px;
        }

        .divider-links {
            flex-direction: column;
            gap: 40px;
        }
    }

    @media (max-width: 784px) {
        gap: 20px;
    }

    @media (max-width: 703px) {
        justify-content: flex-start;
        gap: 40px;
    }
`;

export const DescriptionDoctor = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .logo-footer {
        display: flex;
        text-align: left;
        align-items: center;
        gap: 10px;

        h3 {
            font-size: 20px;
            color: #fff;
        }

        p {
            color: #4b9388;
            font-size: 14px;
        };
    }

    img {
        width: 40px;
        height: 40px;
    }

    p {
        width: 318px;
        color: #D1D5DB;
        font-size: 14px;
    }

    .container-icons {
        display: flex;
        gap: 10px;

        .icons {
            cursor: pointer;
            background-color: #1D303A;
            height: 35px;
            width: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                background-color: #4D9388;
            }
        }
    }

    @media (max-width: 703px) {
        p {
            width: 100%;
        }
    }
`;

export const FastLinks = styled.div`
    text-align: left;

    h3 {
        color: #fff;
        font-size: 20px;
        margin-bottom: 16px;
    }

    ul {
        list-style: none;

        li {
            margin-top: 8px;
        }

        li a {
            color: #d1d5db;
            text-decoration: none;
            font-size: 14px;

            &:hover {
                color: #4B9388;
            }
        }
    }

`;

export const Services = styled.div`
    text-align: left;

    h3 {
        color: #fff;
        font-size: 20px;
        margin-bottom: 16px;
    }

    ul {
        list-style: none;
        text-align: left;

        li {
            color: #d1d5db;
            font-size: 14px;
            margin-top: 8px;
        }
    }
`;

export const Contato = styled.div`
    text-align: left;

    h3 {
        color: #fff;
        font-size: 20px;
        margin-bottom: 16px;
    }

    .card-contact {
        display: flex;
        text-align: left;
        gap: 13px;
        margin-top: 16px;

        p {
            color: #d1d5db;
            font-size: 14px;
        }

        .icon {
            color: #4B9388;
            margin-top: 3px;
        }
    }

`;

export const Line = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    height: 1px;
    width: 78%;
    margin: 32px 0;

    @media (max-width: 900px) {
        width: 90%;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const CopyRight = styled.div`
    display: flex;
    justify-content: space-between;
    width: 77%;

    .terms {
        display: flex;
        gap: 15px;

        p:hover {
            color: #4b9388;
            cursor: pointer;
        }
    }

    p {
        color: #9ca3af;
        font-size: 14px;
    }

    @media (max-width: 1025px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: 100%;
    }
`;