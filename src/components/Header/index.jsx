import { Container, ContainerLogo, NavBar, ContainerButtons, MobileButton } from './styles';
import { useState } from "react";

import { useMenuStore } from '../../store/menuStore'; 

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

function Header({ onScrollSection }) {

    // fallback local para não quebrar se a store não estiver disponível
    const [isOpenMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => setOpenMenu(v => !v);

    return (
        <Container>
            <div className='header-content'>
                <ContainerLogo>
                    <img src="https://storage.googleapis.com/thais-odonto-imagens/logoThaisOdonto.svg" alt="Logo Thais Pinheiro Odontologia" />

                    <div className='logo-text'>
                        <h1>Thaís Pinheiro {innerWidth < 500 ? "Odonto" : "Odontologia"}</h1>
                        <p>Especialista em Endodontia</p>
                    </div>
                </ContainerLogo>

                <NavBar>
                    <ul>
                        <li>
                            <a onClick={() => onScrollSection('hero-section')}>Início</a>
                        </li>
                        <li>
                            <a onClick={() => onScrollSection('about')}>Sobre</a>
                        </li>
                        <li>
                            <a onClick={() => onScrollSection('services')}>Serviços</a>
                        </li>
                        <li>
                            <a onClick={() => onScrollSection('about-clinic')}>Clínica</a>
                        </li>
                        <li>
                            <a onClick={() => onScrollSection('quality')}>Clientes</a>
                        </li>
                        <li>
                            <a onClick={() => onScrollSection('contato')}>Contato</a>
                        </li>
                    </ul>
                </NavBar>

                <ContainerButtons className='container-buttons'>
                    <PrimaryButton
                        label={<><FaInstagram size={16} /> Instagram</>}
                        $width="170px"
                        $height="48px"
                        $radius="30px"
                        link="https://www.instagram.com/thais_pinheiro_odontologia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    />
                    <SecondaryButton
                        label={<><FaWhatsapp size={16} /> WhatsApp</>}
                        $width="130px"
                        $height="48px"
                        $radius="30px"
                        link="https://wa.me/556135506324"
                    />
                </ContainerButtons>

                <MobileButton 
                    className='mobile-button' 
                    type="button"
                    onClick={toggleMenu}
                    aria-label={isOpenMenu ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpenMenu}
                    aria-controls="primary-navigation"
                >
                    {isOpenMenu 
                      ? <IoClose size={26} aria-hidden="true" focusable="false" /> 
                      : <FiMenu size={24} aria-hidden="true" focusable="false" />
                    }
                </MobileButton>
            </div>
        </Container >
    );
}

export default Header;