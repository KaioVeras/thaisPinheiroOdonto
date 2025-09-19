import { FooterContainer, DescriptionDoctor, FooterContent, FastLinks, Services, Contato, Line, CopyRight } from './styles';

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Clock, Copyright } from 'lucide-react';

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <div className='links-footer'>
                    <DescriptionDoctor>
                        <div className='logo-footer'>
                            <img src="https://storage.googleapis.com/thais-odonto-imagens/logoThaisOdonto.svg" alt="Logo Thais Pinheiro Odontologia" />
                            <div>
                                <h3>Thaís Pinheiro Odontologia</h3>
                                <p>Especialista em Endodontia</p>
                            </div>
                        </div>

                        <p>Cuidamos da sua saúde bucal com excelência, dedicação e carinho. Tratamentos especializados em endodontia com tecnologia de ponta.</p>

                        <div className='container-icons'>
                            <div className='icons'>
                                <FaInstagram color='#fff' size={18} />
                            </div>
                            <div className='icons'>
                                <FaWhatsapp color='#fff' size={18} />
                            </div>
                        </div>
                    </DescriptionDoctor>

                    <FastLinks>
                        <h3>Links Rápidos</h3>

                        <nav>
                            <ul>
                                <li><a href="#">Início</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Serviços</a></li>
                                <li><a href="#">Localização</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </nav>
                    </FastLinks>
                </div>

                <div className='divider-links'>
                    <Services>
                        <h3>Nossos Serviços</h3>

                        <ul>
                            <li>Clínica Geral</li>
                            <li>Destística (Restaurações)</li>
                            <li>Periodontia (Limpeza)</li>
                            <li>Cirurgia</li>
                            <li>Endodontia (Canal)</li>
                            <li>Estética (Clareamento)</li>
                        </ul>
                    </Services>

                    <Contato>
                        <h3>Contato</h3>

                        <div className='card-contact'>
                            <MapPin size={18} className='icon' />
                            <p>Av. Pau Brasil, 10 - Águas Claras, <br /> Brasília - DF, 71926-000</p>
                        </div>

                        <div className='card-contact'>
                            <Phone size={18} className='icon' />
                            <p>(61) 3550-6324</p>
                        </div>

                        <div className='card-contact'>
                            <Clock size={18} className='icon' />
                            <div>
                                <p>Seg - Sex: 08:30h - 16h</p>
                                <p>Sábado e Domingo: Fechado</p>
                            </div>
                        </div>
                    </Contato>
                </div>
            </FooterContent>

            <Line>{/** Linha de separação */}</Line>

            <CopyRight>
                <p><Copyright size={12} /> 2025 Thaís Pinheiro Odontologia. Todos os direitos reservados.</p>

                <div className='terms'>
                    <p>Política de Privacidade</p>
                    <p>Termos de Uso</p>
                </div>
            </CopyRight>
        </FooterContainer>
    );
}

export default Footer;