import { Container, ContainerLogo, NavBar, ContainerButtons, MobileButton } from './styles';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { IoIosMenu } from "react-icons/io";
import { FiMenu } from "react-icons/fi";


import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

function Header() {
    return (
        <Container>
            <div className='header-content'>
                <ContainerLogo>
                    <img src="../../../public/logo.svg" alt="Logo Thais Pinheiro Odontologia" />

                    <div className='logo-text'>
                        <h1>Thais Pinheiro {innerWidth < 500 ? "Odonto" : "Odontologia"}</h1>
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

                <MobileButton className='mobile-button'><FiMenu size={24} /></MobileButton>
            </div>
        </Container >
    );
}

export default Header;