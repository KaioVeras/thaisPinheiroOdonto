import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  .header-content {
    max-width: 1400px;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1150px) {
    nav {
      display: none;
    }

    .mobile-button {
      display: block;
    }

    .container-buttons {
      display: none;
    }
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 45px;
    height: 45px;
  }

  .logo-text h1 {
    font-size: 20px;
  }

  .logo-text p {
    font-size: 14px;
    color: #4d9388;
  }

  @media (max-width: 1150px) {
    .logo-text h1 {
      font-size: 18px;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const NavBar = styled.nav`
  ul {
    display: flex;
    gap: 12px; /* separa alvos adjacentes */
  }
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;          /* alvo mínimo */
    padding: 12px 14px;        /* aumenta a área de toque */
    border-radius: 8px;
  }
  @media (max-width: 768px) {
    ul { gap: 10px; }
    a { min-height: 48px; width: 100%; }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  > a, > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    min-height: 48px;
    padding: 12px 16px;
    border-radius: 10px;
  }
`;

export const MobileButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
  padding: 12px;
  border-radius: 10px;

  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;
