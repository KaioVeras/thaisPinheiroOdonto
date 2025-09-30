import { AboutClinicContainer, DescriptionClinic, ContainerList } from './styles';

import { ShieldCheck, Smile, Zap } from 'lucide-react';

function AboutClinic() {
    return (
        <AboutClinicContainer id='about-clinic'>
            <div className='container-clinic'>
                <DescriptionClinic>
                    <h1>Nossa Clínica</h1>
                    <p className='paragraph-title'>Um ambiente que une tecnologia e acolhimento.</p>
                    <p>Nosso consultório foi projetado para oferecer o melhor em saúde bucal, com equipamentos de última geração e um ambiente acolhedor. Estamos comprometidos em transformar sua visita ao dentista em uma experiência tranquila e positiva.</p>

                    <ContainerList>
                        <div className='item-list'>
                            <div className='icon'>
                                <Smile size={24} />
                            </div>

                            <div>
                                <h4>Cuidado com o Paciente</h4>
                                <p>Sua saúde e conforto são nossa prioridade máxima.</p>
                            </div>
                        </div>

                        <div className='item-list'>
                            <div className='icon'>
                                <Zap size={24} />
                            </div>

                            <div>
                                <h4>Tecnologia Avançada</h4>
                                <p>Equipamentos modernos para precisão nos tratamentos.</p>
                            </div>
                        </div>

                        <div className='item-list'>
                            <div className='icon'>
                                <ShieldCheck size={24} />
                            </div>

                            <div>
                                <h4>Segurança e Ética</h4>
                                <p>Seguimos rigorosos padrões de ética profissional.</p>
                            </div>
                        </div>


                    </ContainerList>
                </DescriptionClinic>

                <img 
                    src='https://storage.googleapis.com/thais-odonto-imagens/consultorio.webp' 
                    alt='Imagem da clínica' 
                    className='image-clinic'
                    loading='lazy'
                />
            </div>
        </AboutClinicContainer>
    );
}

export default AboutClinic;