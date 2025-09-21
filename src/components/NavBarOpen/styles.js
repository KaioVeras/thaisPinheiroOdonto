import styled from 'styled-components';

 export const NavBarOpenContainer = styled.div`
    padding: 100px 20px 20px 20px;
    text-align: center;
    display: ${props => props.display};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #fff;

    @media (min-width: 1150px) {
        display: none;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    align-items: flex-start;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
    }

    li a {
        color: #4b5563;
        cursor: pointer;

        &:hover {
            color: #4d9388;
        }
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;
`;