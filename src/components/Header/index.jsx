import { Container, ContainerLogo, NavBar, ContainerButtons, MobileButton } from './styles';

import { useMenuStore } from '../../store/menuStore';

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

function Header() {

    const isOpenMenu = useMenuStore(state => state.isOpenMenu);
    const toggleMenu = useMenuStore(state => state.toggleMenu);

    return (
        <Container>
            <div className='header-content'>
                <ContainerLogo href="#hero-section">
                    <img src="https://storage.googleapis.com/thais-odonto-imagens/logoThaisOdonto.svg" alt
                        ="Logo Thais Pinheiro Odontologia" />

                    <div className='logo-text'>
                        <span className="brand-name">Thaís Pinheiro Odontologia</span>
                        <p>Especialista em Endodontia</p>
                    </div>
                </ContainerLogo>

                <NavBar>
                    <ul>
                        <li>
                            <a href="#hero-section">Início</a>
                        </li>
                        <li>
                            <a href="#about">Sobre</a>
                        </li>
                        <li>
                            <a href="#services">Serviços</a>
                        </li>
                        <li>
                            <a href="#about-clinic">Clínica</a>
                        </li>
                        <li>
                            <a href="#quality">Clientes</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                </NavBar>

                <ContainerButtons className='container-buttons'>
                    <PrimaryButton
                        label={<><FaInstagram size={16} /> Instagram</>}
                        width="170px"
                        height="34px"
                        link="https://www.instagram.com/thais_pinheiro_odontologia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    />
                    <SecondaryButton
                        label={<><FaWhatsapp size={16} /> WhatsApp</>}
                        width="130px"
                        height="34px"
                        link="https://wa.me/556135506324"
                    />
                </ContainerButtons>

                <MobileButton
                    id="mobile-menu-button"
                    className='mobile-button'
                    onClick={toggleMenu}
                    aria-label={isOpenMenu ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={isOpenMenu}
                    aria-controls="mobile-navigation"
                >
                    {isOpenMenu ? <IoClose size={26} /> : <FiMenu size={24} />}
                </MobileButton>
            </div>
        </Container >
    );
}

export default Header;
