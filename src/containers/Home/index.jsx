import { useState, useEffect, useRef } from 'react';
import { Container, ContentDiv } from './styles';

import Header from '../../components/Header';
import NavBarOpen from '../../components/NavBarOpen';
import HeroSection from '../../components/HeroSection';
import AboutProfessional from '../../components/AboutProfessional';
import Servicos from '../../components/Servicos';
import AboutClinic from '../../components/AboutClinic';
import QualityNote from '../../components/QualityNote';
import Contato from '../../components/Contato';
import Footer from '../../components/Footer';

function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <Container>
      <Header />
      <NavBarOpen />

      <ContentDiv ref={elementRef} className={isVisible ? 'visible' : ''}>
        <HeroSection />
        <AboutProfessional />
        <Servicos />
        <AboutClinic />
        <QualityNote />
        <Contato/>
        <Footer/>
      </ContentDiv>
    </Container>
  );
}

export default Home;