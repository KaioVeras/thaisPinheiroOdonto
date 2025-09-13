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
                <ContainerLogo>
                    <img src="https://storage.googleapis.com/thais-odonto-imagens/logoThaisOdonto.svg" alt="Logo Thais Pinheiro Odontologia" />

                    <div className='logo-text'>
                        <h1>Thaís Pinheiro {innerWidth < 500 ? "Odonto" : "Odontologia"}</h1>
                        <p>Especialista em Endodontia</p>
                    </div>
                </ContainerLogo>

                <NavBar>
                    <ul>
                        <li>Início</li>
                        <li>Sobre</li>
                        <li>Serviços</li>
                        <li>Localização</li>
                        <li>Contato</li>
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

                <MobileButton className='mobile-button' onClick={toggleMenu}>
                    {isOpenMenu ? <IoClose size={26} /> : <FiMenu size={24} />}
                </MobileButton>
            </div>
        </Container >
    );
}

export default Header;