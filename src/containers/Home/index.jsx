import { useEffect, useCallback } from 'react';
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
import FadeInSection from '../../components/FadeInSection';

function Home() {

  const handleScrollSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  useEffect(() => {
    // 1. Desabilita a restauração automática de scroll do navegador
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Remove o hash da URL se houver
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    // 3. Força o scroll para o topo imediatamente
    window.scrollTo(0, 0);

    // 4. Garante que o scroll permaneça no topo após o carregamento completo
    const forceScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Executa após um pequeno delay para sobrescrever qualquer tentativa do navegador
    const timeoutId = setTimeout(forceScrollToTop, 0);

    return () => {
      clearTimeout(timeoutId);
      // Reabilita a restauração de scroll ao desmontar o componente
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <Container>
      <Header onScrollSection={handleScrollSection} />
      <NavBarOpen onScrollSection={handleScrollSection} />

      <ContentDiv>
        <FadeInSection delay={0}>
          <HeroSection onScrollSection={handleScrollSection} />
        </FadeInSection>

        <FadeInSection delay={150}>
          <AboutProfessional />
        </FadeInSection>

        <FadeInSection delay={150}>
          <Servicos />
        </FadeInSection>

        <FadeInSection delay={200}>
          <AboutClinic />
        </FadeInSection>

        <FadeInSection delay={250}>
          <QualityNote />
        </FadeInSection>

        <FadeInSection delay={300}>
          <Contato />
        </FadeInSection>

        <Footer onScrollSection={handleScrollSection} />
      </ContentDiv>
    </Container>
  );
}

export default Home;