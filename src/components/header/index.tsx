import { useState } from 'react'
import gear from '../../assets/gear.svg'
import { Container, HeaderContent, Links, Titulo, TituloDestaque, HamburguerMenu, MobileLinks, MobileMenu, LogoButton} from './style'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        
        <Container>
            <HeaderContent>
                <LogoButton onClick={scrollToTop}>
                    <img src={gear} />
                </LogoButton>
                <Titulo>Torneadora <TituloDestaque>Celso</TituloDestaque></Titulo>
            </HeaderContent>
            <div className="desktop-links">
                <Links href='#servicos'>Serviços</Links>
                <Links href='#localizacao'>Localização</Links>
                <Links href='#contato'>Contato</Links>
            </div>
            <HamburguerMenu onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? 'active' : ''}>
                <span></span>
                <span></span>
                <span></span>
            </HamburguerMenu>
            <MobileMenu className={menuOpen ? 'active' : ''}>
                <MobileLinks href='#servicos' onClick={() => setMenuOpen(false)}>
                    Serviços
                </MobileLinks>
                <MobileLinks href='#localizacao' onClick={() => setMenuOpen(false)}>
                    Localização
                </MobileLinks>
                <MobileLinks href='#contato' onClick={() => setMenuOpen(false)}>
                    Contato
                </MobileLinks>
            </MobileMenu>
        </Container>
    )
}