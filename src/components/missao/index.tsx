import { Container, Texto, CarouselButton, CarouselContainer, Slide, Indicators, Indicator } from "./style";
import { useEffect, useState } from "react";
import torno1 from '../../assets/torno1.jpg'
import torno2 from '../../assets/torno2.jpg'
import freza from '../../assets/freza.jpg'

export default function Missao() {
    const images = [torno1, torno2, freza];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);


    return(
        <Container>
            <Texto>Precisão em metal, resultados em produtividade - excelência em tornearia mecânica</Texto>
            <Texto>Desde 2004 somos seu parceiro estratégico na fabricação de peças torneadas, oferecendo soluções personalizadas</Texto>
            <CarouselContainer>
                {images.map((image, index) => (
                    <Slide 
                        key={index}
                        active={index === currentIndex}
                    >
                        <img src={image} alt={`Máquina ${index + 1}`} />
                    </Slide>
                ))}
                
                <CarouselButton direction="prev" onClick={prevSlide}>
                    &#10094;
                </CarouselButton>
                <CarouselButton direction="next" onClick={nextSlide}>
                    &#10095;
                </CarouselButton>

                <Indicators>
                    {images.map((_, index) => (
                        <Indicator
                            key={index}
                            active={index === currentIndex}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </Indicators>
            </CarouselContainer>
        </Container>
    )
}
