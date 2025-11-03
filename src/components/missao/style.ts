import styled from "styled-components";
import { cores } from "../../globalstyle";

export const Container = styled.div`
    margin-top: 70px;
    padding: 60px;
    background-color: ${cores.azul};
    justify-content: center;
    text-align: center;

    @media (max-width: 1024px) {
        padding: 50px 40px;
        margin-top: 60px;
    }
    
    @media (max-width: 768px) {
        padding: 40px 30px;
        margin-top: 50px;
    }
    
    @media (max-width: 480px) {
        padding: 30px 20px;
        margin-top: 40px;
    }
`
export const Texto = styled.p`
    font-size: 40px;
    line-height: 65px;
    color: white;

    @media (max-width: 1024px) {
        font-size: 36px;
        line-height: 50px;
    }
    
    @media (max-width: 768px) {
        font-size: 28px;
        line-height: 40px;
    }
    
    @media (max-width: 480px) {
        font-size: 22px;
        line-height: 32px;
    }
`

export const CarouselContainer = styled.div`
    position: relative;
    height: 500px;
    width: 100%;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 400px;
    }

    @media (max-width: 480px) {
        height: 300px;
    }
`

export const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`


export const Slide = styled.div<{ active: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${props => props.active ? 1 : 0};
    transition: opacity 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
        max-width: 800px;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        img {
            width: 90%; 
        }
    }

    @media (max-width: 480px) {
        img {
            width: 95%; 
        }
    }
`

export const CarouselButton = styled.button<{ direction: 'prev' | 'next' }>`
    position: absolute;
    top: 50%;
    ${props => props.direction === 'prev' ? 'left: 10px;' : 'right: 10px;'}
    transform: translateY(-50%);
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    font-size: 18px;
    border-radius: 50%;

    &:hover {
        background: rgba(0,0,0,0.8);
    }

    @media (max-width: 768px) {
        padding: 8px 12px;
        font-size: 16px;
    }
`

export const Indicators = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
`

export const Indicator = styled.div<{ active: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.active ? cores.branco : 'rgba(255,255,255,0.5)'};
    cursor: pointer;
    transition:  0.3s ease;

    &:hover {
        background: ${cores.branco};
    }
`