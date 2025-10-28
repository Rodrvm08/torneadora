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

export const Hero = styled.p`
    font-size: 64px;
    line-height: 65px;
    color: white;

    @media (max-width: 1024px) {
        font-size: 48px;
        line-height: 50px;
    }
    
    @media (max-width: 768px) {
        font-size: 36px;
        line-height: 40px;
    }
    
    @media (max-width: 480px) {
        font-size: 28px;
        line-height: 32px;
    }
`