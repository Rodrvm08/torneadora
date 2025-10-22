import { Container, Texto } from "./style";

export default function Localizacao() {
    return(
        <Container id="localizacao">
            <Texto>
                Localização:
                <br />Av. industrial Gil Martins 1381
                <br />Bairro Pio XII
            </Texto>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429.94576455140873!2d-42.80024503057335!3d-5.117893272621704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3726b271d1b3%3A0x4cbc5cbddb42dd57!2sAv.%20Industrial%20Gil%20Martins%2C%201381a%20-%20Tabuleta%2C%20Teresina%20-%20PI%2C%2064015-305!5e0!3m2!1spt-BR!2sbr!4v1760303870646!5m2!1spt-BR!2sbr" width="400" height="200"  loading="lazy"></iframe>
        </Container>
    )
}