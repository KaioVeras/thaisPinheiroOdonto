import styled from "styled-components";

export const PrimaryButtonStyle = styled.a`
    height: ${props => props.height};
    width: ${props => props.width};
    font-size: 16px;
    background-color: transparent;
    border: 1px solid #35776e;
    border-radius: ${props => props.radius ? props.radius : "4px"};
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    color: #35776e;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 0 20px;

    &:hover {
        background-color: #35776e;
        color: #fff;
    }

    @media (max-width: 700px) {
        width: 90%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;
