import { ContactSection, Container, Info, PhoneItem, Telefone } from "./style";
import Whats from '../../assets/Whats.svg'

export default function Contato() {
    return(
        <Container id="contato">
            <Info>
                Entre em contato conosco:
            </Info>
            <ContactSection>
                <Info>
                    Telefones:
                </Info>
                <ul>
                    <Telefone>(86) 3218-4837</Telefone>
                    <PhoneItem>
                        <Telefone>(86) 99991-5884</Telefone>
                        <img src={Whats} />
                    </PhoneItem>
                </ul>
            </ContactSection>
        </Container>
    )
}