import { NavBarOpenContainer, NavBar, ContainerButtons } from "./styles";
import { useMenuStore } from "../../store/menuStore";

import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function NavBarOpen() {
    const isOpenMenu = useMenuStore(state => state.isOpenMenu);
    return (
        <NavBarOpenContainer display={isOpenMenu ? 'block' : 'none'}>
            <NavBar>
                <ul>
                    <li>Início</li>
                    <li>sobre</li>
                    <li>Serviços</li>
                    <li>Localização</li>
                    <li>Contato</li>
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