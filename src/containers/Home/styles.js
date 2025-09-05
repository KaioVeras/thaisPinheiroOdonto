import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 100px);
  background-color: #fff;
`;

export const ContentDiv = styled.div`
  padding-top: 80px;
  text-align: center;

  /* Estados da animação */
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
