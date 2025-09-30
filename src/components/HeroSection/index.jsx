import { HeroSectionContainer, HeroCard, ButtonServices } from "./styles";
import { Shield, Heart, Award, MessageCircle } from 'lucide-react';

import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";

function HeroSection({ onScrollSection }) {
    return (
        <HeroSectionContainer id="hero-section">
            <div className="hero-content">
                <div className="hero-title">
                    <h1>Sorrir com saúde</h1><h1 className="hero-title-color">começa aqui</h1>
                </div>

                <p className="hero-description">Tratamento de canal com excelência, cuidado e responsabilidade. Preservamos a estrutura natural do seu dente com tecnologia avançada e atendimento humanizado.</p>

                <div className="hero-cards">
                    <HeroCard>
                        <div className="icons">
                            <Shield size={24} color="#4D9388" />
                        </div>

                        <div>
                            <h3>Segurança</h3>
                            <p>Protocolos rigorosos</p>
                        </div>
                    </HeroCard>

                    <HeroCard>
                        <div className="icons">
                            <Heart size={24} color="#4D9388" />
                        </div>

                        <div>
                            <h3>Cuidado</h3>
                            <p>Suporte humanizado</p>
                        </div>
                    </HeroCard>

                    <HeroCard>
                        <div className="icons">
                            <Award size={24} color="#4D9388" />
                        </div>

                        <div>
                            <h3>Excelência</h3>
                            <p>Resultados Superiores</p>
                        </div>
                    </HeroCard>
                </div>


                <div className="container-buttons">
                    <SecondaryButton
                        label="Agende sua consulta"
                        link="https://wa.me/556135506324"
                        $width="280px"
                        $height="48px"
                        $radius="30px"
                    />

                    <ButtonServices onClick={() => onScrollSection('services')}>
                        Saiba mais sobre nossos serviços
                    </ButtonServices>
                </div>
            </div>
        </HeroSectionContainer>
    );
}

export default HeroSection;
