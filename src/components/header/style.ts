import styled from "styled-components";

import { cores } from "../../globalstyle";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    @media (max-width: 768px) {
        height: 60px;
        padding: 0 15px;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }
    
    @media (max-width: 480px) {
        height: auto;
        padding: 10px;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 768px) {
        gap: 12px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    @media (max-width: 480px) {
        gap: 8px;
        flex-direction: column;
    }
`

export const Titulo = styled.p`
    font-size: 64px;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: 48px;
    }
    
    @media (max-width: 768px) {
        font-size: 36px;
    }
    
    @media (max-width: 480px) {
        font-size: 28px;
        text-align: center;
    }
`
export const TituloDestaque = styled.span`
    color: ${cores.amarelo};
`

export const Links = styled.a`
    margin-right: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    font-size: 40px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover {
        color: ${cores.amarelo};
    }

    @media (max-width: 1024px) {
        font-size: 32px;
        margin-right: 15px;
    }
    
    @media (max-width: 768px) {
        font-size: 24px;
        margin-right: 10px;
    }
    
    @media (max-width: 480px) {
        font-size: 18px;
        margin-right: 8px;
        margin-bottom: 5px;
    }
`