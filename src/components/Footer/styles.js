import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #111827;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 20px;
`;

export const FooterContent = styled.div`
    width: 100%;
    display: flex;
    gap: 50px;
    justify-content: center;
    flex-wrap: wrap;
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
    margin-left: 150px;

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
    margin-left: 150px;

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
`;