import styled from "styled-components";

import { cores } from "../../globalstyle";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 0 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;

    .desktop-links {
        display: flex;

        @media (max-width: 768px) {
            display: none;
        }
    }

    @media (max-width: 768px) {
        height: 60px;
        padding: 0 15px;
        position: fixed;
    }
    
    @media (max-width: 480px) {
        height: auto;
        padding: 10px;
        position: fixed;
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
        display: flex;
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

export const HamburguerMenu = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 5px;
    
    span {
        height: 3px;
        width: 25px;
        background: ${cores.amarelo};
        margin-bottom: 4px;
        border-radius: 2px;
        transition: 0.3s;
    }

    &.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    &.active span:nth-child(2) {
        opacity: 0;
    }

    &.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

export const MobileMenu = styled.div`
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: row;
    align-items: center;
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    display: none;

    &.active {
        display: flex;
    }

    @media (max-width: 768px) {
        top: 60px;
    }
`

export const MobileLinks = styled.a`
    padding: 15px 0;
    font-size: 24px;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    width: 100%;
    text-align: center;

    &:hover {
        background: ${cores.amarelo}20;
        color: ${cores.amarelo};
    }
`

export const LogoButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
        transition: all 0.2s ease;
    }
    
    &:active {
        transform: scale(0.95);
    }

    img {
        width: 50px;
        height: 50px;
        
        @media (max-width: 768px) {
            width: 40px;
            height: 40px;
        }
        
        @media (max-width: 480px) {
            width: 35px;
            height: 35px;
        }
    }
`