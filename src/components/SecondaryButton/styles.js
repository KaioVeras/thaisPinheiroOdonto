import styled from "styled-components";

export const SecondaryButtonStyle = styled.button`
    height: ${props => props.height};
    width: ${props => props.width};
    font-size: ${props => props.fontSize ? props.fontSize : "16px"};
    background-color: #4D9388;
    border: 1px solid #4D9388;
    border-radius: ${props => props.radius ? props.radius : "4px"};
    cursor: pointer;
    transition: all 0.3s;

    a {
        text-decoration: none;
        color: #fff;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    &:hover {
        background-color: #5BA49A;
    }

    @media (max-width: 700px) {
        width: 90%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;