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

  @media (max-width: 1190px) {
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

export const ContainerLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  img {
    width: 45px;
    height: 45px;
  }

  .logo-text h1 {
    font-size: 20px;
    color: #1f2937;
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
    list-style: none;
  }

  li a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 8px 12px;
    border-radius: 6px;

    text-decoration: none;
    color: #4b5563;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3 ease;

    &:hover {
      color: #4d9388;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const MobileButton = styled.button`
  display: none;
  color: #4d9388;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
`;
