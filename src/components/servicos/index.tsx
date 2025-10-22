import { Container, Servicolist, ImagesWrapper, Title, ServicesContainer } from "./style";
import fachada from '../../assets/fachada.png' 
import torno from '../../assets/torno.png'

export default function Servicos() {
    return(
        <Container id="servicos">
            <ServicesContainer>
                <Title>Realizamos:</Title>
                <ul>
                    <Servicolist>Soldas</Servicolist>
                    <Servicolist>Serviços em torno</Servicolist>
                    <Servicolist>Confecção de: porcas, eixos, buchas e engrenagens</Servicolist>
                    <Servicolist>Fabricações sob medida</Servicolist>
                </ul>
            </ServicesContainer>
            <ImagesWrapper>
                <img src={fachada}  />
            </ImagesWrapper>
        </Container>
    )
}