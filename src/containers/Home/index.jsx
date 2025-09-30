import { useEffect } from 'react';
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

  const handleScrollSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <Container>
      <Header onScrollSection={handleScrollSection} />
      <NavBarOpen onScrollSection={handleScrollSection} />

      <ContentDiv>
        <FadeInSection delay={0}>
          <HeroSection onScrollSection={handleScrollSection}/>
        </FadeInSection>

        <FadeInSection delay={100}>
          <AboutProfessional />
        </FadeInSection>

        <FadeInSection delay={200}>
          <Servicos />
        </FadeInSection>

        <FadeInSection delay={100}>
          <AboutClinic />
        </FadeInSection>

        <FadeInSection delay={200}>
          <QualityNote />
        </FadeInSection>

        <FadeInSection delay={100}>
          <Contato />
        </FadeInSection>

        <Footer onScrollSection={handleScrollSection} />
      </ContentDiv>
    </Container>
  );
}

export default Home;