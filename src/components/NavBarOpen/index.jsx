import { NavBarOpenContainer, NavBar, ContainerButtons } from "./styles";
import { useMenuStore } from "../../store/menuStore";

import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function NavBarOpen({ onScrollSection }) {
    const isOpenMenu = useMenuStore(state => state.isOpenMenu);
    const toggleMenu = useMenuStore(state => state.toggleMenu)

    const handleScrollAndClose = (sectionId) => {
        onScrollSection(sectionId)
        toggleMenu();
    }

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        handleScrollAndClose(sectionId);
    }

    return (
        <NavBarOpenContainer display={isOpenMenu ? 'block' : 'none'}>
            <NavBar>
                <ul>
                    <li>
                        <a href="#hero-section" onClick={(e) => handleClick(e, 'hero-section')}>Início</a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => handleClick(e, 'about')}>Sobre</a>
                    </li>
                    <li>
                        <a href="#services" onClick={(e) => handleClick(e, 'services')}>Serviços</a>
                    </li>
                    <li>
                        <a href="#about-clinic" onClick={(e) => handleClick(e, 'about-clinic')}>Clínica</a>
                    </li>
                    <li>
                        <a href="#quality" onClick={(e) => handleClick(e, 'quality')}>Clientes</a>
                    </li>
                    <li>
                        <a href="#contato" onClick={(e) => handleClick(e, 'contato')}>Contato</a>
                    </li>
                </ul>
            </NavBar>

            <ContainerButtons>
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
        </NavBarOpenContainer>
    );
}

export default NavBarOpen;