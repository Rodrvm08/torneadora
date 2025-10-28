import { Container, Servicolist, ImagesWrapper, Title, ServicesContainer } from "./style";
import fachada from '../../assets/fachada.jpg' 
import torno from '../../assets/torno.png'

export default function Servicos() {
    return(
        <Container id="servicos">
            <ServicesContainer>
                <Title>Realizamos:</Title>
                <ul>
                    <Servicolist>Soldas em geral</Servicolist>
                    <Servicolist>Serviços em torno e freza</Servicolist>
                    <Servicolist>Confecção de: porcas, eixos, buchas e engrenagens</Servicolist>
                    <Servicolist>Fabricações de peças sob medida</Servicolist>
                    <Servicolist>Adaptações em veículos para PCDs</Servicolist>
                </ul>
            </ServicesContainer>
            <ImagesWrapper>
                <img src={fachada}  />
            </ImagesWrapper>
        </Container>
    )
}