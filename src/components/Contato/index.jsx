import { ContatoContainer, ContatoContent, ContainerContent, Content, TimeContent } from './styles';

import { FaInstagram } from 'react-icons/fa';
import { MapPin, Phone } from 'lucide-react';

function Contato() {
    return (
        <ContatoContainer id='contato'>
            <div className='description-contato'>
                <h2>Entre em Contato</h2>
                <p>Estamos prontos para cuidar da sua saúde bucal. Entre em contato conosco e agende sua consulta.</p>
            </div>

            <ContainerContent>
                <ContatoContent>
                    <div className='dados-content'>
                        <Content href="https://maps.app.goo.gl/aUiMSw4NuyBJYmf39" target="_blank" rel="noopener noreferrer" aria-label="Ver localização no Google Maps">
                            <MapPin size={24} className='icon-map' />
                            <div className='content-item'>
                                <h3>Endereço</h3>
                                <p>Av. Pau Brasil, 10 - Águas Claras, Brasília - DF, 71926-000</p>
                            </div>
                        </Content>

                        <Content href="https://wa.me/556135506324" target='_blank' rel='noopener noreferrer' aria-label="Ligar para Thaís Pinheiro Odontologia">
                            <Phone size={24} className='icon' />
                            <div className='content-item'>
                                <h3>Telefone</h3>
                                <p>(61) 3550-6324</p>
                            </div>
                        </Content>

                        <Content href='https://www.instagram.com/thais_pinheiro_odontologia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel='noopener noreferrer' aria-label="Acessar Instagram de Thaís Pinheiro Odontologia">
                            <FaInstagram size={24} className='icon' />
                            <div className='content-item'>
                                <h3>Instagram</h3>
                                <p>@thais_pinheiro_odontologia</p>
                            </div>
                        </Content>
                    </div>

                    <TimeContent>
                        <div className='card-time'>
                            <h3>Horários de Atendimento</h3>
                            <p>Segunda a Sexta: 8:30h - 16h</p>
                            <p>Sábado e Domingo: Fechado</p>
                        </div>

                        <div className='card-time'>
                            <h3>Convênios</h3>
                            <p>Amil Dental</p>
                        </div>
                    </TimeContent>
                </ContatoContent>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.3051038831845!2d-48.029851023920045!3d-15.8405537240954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33b224c97b91%3A0x6a2c3f1e978f3bde!2sThais%20Pinheiro%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1757611982854!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização da clínica no Google Maps"
                    ></iframe>
                </div>
            </ContainerContent>


        </ContatoContainer>
    );
}

export default Contato;