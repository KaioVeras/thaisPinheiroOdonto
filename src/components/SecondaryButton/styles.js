import styled from "styled-components";

export const SecondaryButtonStyle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 48px;
  min-height: 48px;
  padding: 12px 24px;

  /* Use transient props ($) para estilização */
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "48px"};
  border-radius: ${({ $radius }) => $radius || "30px"};
  font-size: ${({ $fontSize }) => $fontSize || "16px"};

  background-color: #4d9388;
  border: 1px solid #4d9388;
  cursor: pointer;
  transition: all 0.3s;

  color: #fff !important;
  text-decoration: none;

  &:hover {
    background-color: #5ba49a;
  }

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
