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
  return (
    <Container>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Header />
      <NavBarOpen />

      <ContentDiv as="main" id="main-content">
        <FadeInSection delay={0}>
          <HeroSection />
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

      </ContentDiv>
      <Footer />
    </Container>
  );
}

export default Home;
