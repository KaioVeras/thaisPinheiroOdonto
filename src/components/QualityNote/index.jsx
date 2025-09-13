import { QualityNoteContainer, ContainerCards, Card, NotesGoogle } from './styles';

import { Quote } from 'lucide-react';
import { FaStar } from "react-icons/fa";

function QualityNote() {
    return (
        <QualityNoteContainer>
            <div className='description-quality'>
                <h1>O que nossos pacientes dizem</h1>
                <p>A satisfação dos nossos pacientes é nossa maior recompensa. Veja alguns depoimentos de quem confia em nosso trabalho.</p>
            </div>

            <ContainerCards>
                <Card>
                    <div className='container-icons'>
                        <Quote size={34} />

                        <div>
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                        </div>
                    </div>

                    <p className='coment'>"Uma baita profissional! Muito atenciosa e vai explicando cada passo dos procedimentos! Recomendo demais..."</p>

                    <div className='author'>
                        <h4>Vinicius Nunes</h4>
                        <p>Via Google</p>
                    </div>
                </Card>

                <Card>
                    <div className='container-icons'>
                        <Quote size={34} />

                        <div>
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                        </div>
                    </div>

                    <p className='coment'>"Drª Thais uma Profissional nota mil !!! Super recomendo. Zero dor, muito menos desconforto!"</p>

                    <div className='author'>
                        <h4>Jaime Guimaraes</h4>
                        <p>Via Google</p>
                    </div>
                </Card>

                <Card>
                    <div className='container-icons'>
                        <Quote size={34} />

                        <div>
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                        </div>
                    </div>

                    <p className='coment'>"A Doutora Thais é uma excelente profissional. Ela ensina todos os passos do procedimento, isso tranquiliza o paciente."</p>

                    <div className='author'>
                        <h4>João Paulo</h4>
                        <p>Via Google</p>
                    </div>
                </Card>

                <Card>
                    <div className='container-icons'>
                        <Quote size={34} />

                        <div>
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                            <FaStar size={20} color="#FFD700" />
                        </div>
                    </div>

                    <p className='coment'>"Uma excelente profissional! Amei o atendimento, tudo sem dor. Atendimento humanizado, super indico!!!"</p>

                    <div className='author'>
                        <h4>Iona Nascimento</h4>
                        <p>Via Google</p>
                    </div>
                </Card>
            </ContainerCards>

            <NotesGoogle>
                <h3>Seja nosso próximo paciente satisfeito!</h3>
                <p>Agende sua consulta e descubra como podemos cuidar da sua saúde bucal com excelência e carinho.</p>
                
                <div className='stars-google'>
                    <h4 className='title-star'>
                        <FaStar size={20} color="#4b9388" />
                        5/5 estrelas no Google
                    </h4>

                    <h4>
                        +1000 pacientes atendidos
                    </h4>
                </div>
            </NotesGoogle>
        </QualityNoteContainer>
    );
}

export default QualityNote;