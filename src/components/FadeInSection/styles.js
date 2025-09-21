import styled from 'styled-components';

export const AnimatedContainer = styled.div`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '30px'});
  transition: all 0.6s ease-out;
  transition-delay: ${props => props.delay}ms;
`;