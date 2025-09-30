import { AboutProfessionalContainer, ContentProfessional } from "./styles";

import { Award } from 'lucide-react';

function AboutProfessional() {
    return (
        <AboutProfessionalContainer id="about">
            <div className="container-professional">

                <img 
                    src="https://storage.googleapis.com/thais-odonto-imagens/perfilThais.webp" 
                    className="image" 
                    alt="Imagem Dra. Thaís Pinheiro"
                    loading="lazy"
                />

                <ContentProfessional>
                    <h2>Dra. Thaís Pinheiro</h2>
                    <h3>Cirurgiã-Dentista, Especialista em Endodontia</h3>

                    <div className="paragraphs">
                        <p>A Dra. Thaís Pinheiro é especialista em tratamento de canal com mais de 10 anos de experiência, dedicada a transformar a experiência odontológica. Formada em 2008 e especialista desde 2014, ela combina tecnologias modernas com um atendimento acolhedor e individualizado, garantindo conforto e segurança.</p>

                        <p>Sua paixão por aliviar a dor a mantém em constante busca por aperfeiçoamento, aplicando técnicas de anestesia. Na clínica da Dra. Thaís, sua dor e seus traumas são respeitados, e o objetivo é oferecer uma experiência positiva, cuidando do seu sorriso com excelência e humanidade.</p>
                    </div>

                    <p className="paragraph-cro">
                        <Award size={20} />
                        CRO-DF 8454
                    </p>
                </ContentProfessional>
            </div>
        </AboutProfessionalContainer>
    );
}

export default AboutProfessional;