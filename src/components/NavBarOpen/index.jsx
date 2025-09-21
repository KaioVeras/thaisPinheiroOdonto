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

    return (
        <NavBarOpenContainer display={isOpenMenu ? 'block' : 'none'}>
            <NavBar>
                <ul>
                    <li>
                        <a onClick={() => handleScrollAndClose('hero-section')}>Início</a>
                    </li>
                    <li>
                        <a onClick={() => handleScrollAndClose('about')}>Sobre</a>
                    </li>
                    <li>
                        <a onClick={() => handleScrollAndClose('services')}>Serviços</a>
                    </li>
                    <li>
                        <a onClick={() => handleScrollAndClose('about-clinic')}>Clínica</a>
                    </li>
                    <li>
                        <a onClick={() => handleScrollAndClose('quality')}>Clientes</a>
                    </li>
                    <li>
                        <a onClick={() => handleScrollAndClose('contato')}>Contato</a>
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