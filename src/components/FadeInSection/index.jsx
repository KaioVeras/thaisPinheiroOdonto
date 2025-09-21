import { AnimatedContainer } from './styles';
import { useInView } from '../../hooks/useInView';

function FadeInSection({ children, delay = 0 }) {
  const [ref, isInView] = useInView();

  return (
    <AnimatedContainer 
      ref={ref} 
      isVisible={isInView} 
      delay={delay}
    >
      {children}
    </AnimatedContainer>
  );
}

export default FadeInSection;