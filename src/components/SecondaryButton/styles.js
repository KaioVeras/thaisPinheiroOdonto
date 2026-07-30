import styled from "styled-components";

export const SecondaryButtonStyle = styled.a`
    height: ${props => props.height};
    width: ${props => props.width};
    font-size: ${props => props.fontSize ? props.fontSize : "16px"};
    background-color: #35776e;
    border: 1px solid #35776e;
    border-radius: ${props => props.radius ? props.radius : "4px"};
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover {
        background-color: #285f57;
    }

    @media (max-width: 700px) {
        width: 90%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;
