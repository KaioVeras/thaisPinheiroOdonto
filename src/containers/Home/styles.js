import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 100px);
  background-color: #fff;

  .skip-link {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 2000;
    padding: 10px 14px;
    background-color: #fff;
    color: #285f57;
    transform: translateY(-150%);
  }

  .skip-link:focus {
    transform: translateY(0);
  }
`;

export const ContentDiv = styled.div`
  padding-top: 80px;
  text-align: center;
`;
