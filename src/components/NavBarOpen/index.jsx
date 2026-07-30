import { useEffect, useRef } from "react";
import { NavBarOpenContainer, NavBar, ContainerButtons } from "./styles";
import { useMenuStore } from "../../store/menuStore";

import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function NavBarOpen() {
    const isOpenMenu = useMenuStore(state => state.isOpenMenu);
    const closeMenu = useMenuStore(state => state.closeMenu);
    const menuRef = useRef(null);
    const firstLinkRef = useRef(null);

    const closeAndRestoreFocus = () => {
        closeMenu();
        document.getElementById('mobile-menu-button')?.focus();
    };

    useEffect(() => {
        if (!isOpenMenu) return;

        firstLinkRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeMenu();
                document.getElementById('mobile-menu-button')?.focus();
            }

            if (event.key === 'Tab') {
                const focusableElements = menuRef.current?.querySelectorAll('a[href]');
                const firstElement = focusableElements?.[0];
                const lastElement = focusableElements?.[focusableElements.length - 1];

                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement?.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpenMenu, closeMenu]);

    return (
        <NavBarOpenContainer ref={menuRef} id="mobile-navigation" display={isOpenMenu ? 'block' : 'none'} aria-hidden={!isOpenMenu}>
            <NavBar aria-label="Navegação móvel">
                <ul>
                    <li>
                        <a ref={firstLinkRef} href="#hero-section" onClick={closeAndRestoreFocus}>Início</a>
                    </li>
                    <li>
                        <a href="#about" onClick={closeAndRestoreFocus}>Sobre</a>
                    </li>
                    <li>
                        <a href="#services" onClick={closeAndRestoreFocus}>Serviços</a>
                    </li>
                    <li>
                        <a href="#about-clinic" onClick={closeAndRestoreFocus}>Clínica</a>
                    </li>
                    <li>
                        <a href="#quality" onClick={closeAndRestoreFocus}>Clientes</a>
                    </li>
                    <li>
                        <a href="#contato" onClick={closeAndRestoreFocus}>Contato</a>
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
