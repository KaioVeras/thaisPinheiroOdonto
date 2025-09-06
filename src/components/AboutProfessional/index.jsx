import { AboutProfessionalContainer, ContentProfessional } from "./styles";

import { Award } from 'lucide-react';

function AboutProfessional() {
    return (
        <AboutProfessionalContainer>
            <div className="container-professional">

                <img src="/public/d8f0747c-9942-44d0-9c13-c2015ea96c87.png" className="image" />


                <ContentProfessional>
                    <h1>Dra. Thaís Pinheiro</h1>
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