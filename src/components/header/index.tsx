import gear from '../../assets/gear.svg'
import { Container, HeaderContent, Links, Titulo, TituloDestaque } from './style'

export default function Header() {
    return(
        <Container>
            <HeaderContent>
                <img src={gear} />
                <Titulo>Torneadora <TituloDestaque>Celso</TituloDestaque></Titulo>
            </HeaderContent>
            <div>
                <Links href='#servicos'>Serviços</Links>
                <Links href='#localizacao'>Localização</Links>
                <Links href='#contato'>Contato</Links>
            </div>
        </Container>
    )
}