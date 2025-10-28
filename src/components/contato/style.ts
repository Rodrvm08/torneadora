import styled from "styled-components";
import { cores } from "../../globalstyle";

export const Container = styled.div`
    background-color: ${cores.cinza};
    padding: 20px 0;

    @media (max-width: 768px) {
        padding: 15px 0;
    }
    
    @media (max-width: 480px) {
        padding: 10px 0;
    }
`
export const Info = styled.p`
    margin-left: 23px;
    font-size: 64px;
    line-height: 65px;

    @media (max-width: 1024px) {
        font-size: 48px;
        line-height: 50px;
    }
    
    @media (max-width: 768px) {
        font-size: 36px;
        line-height: 40px;
        margin-left: 15px;
    }
    
    @media (max-width: 480px) {
        font-size: 28px;
        line-height: 32px;
        margin-left: 10px;
    }
`
export const Telefone = styled.li`
    list-style: none;
    font-size: 64px;

    @media (max-width: 1024px) {
        font-size: 48px;
    }
    
    @media (max-width: 768px) {
        font-size: 36px;
    }
    
    @media (max-width: 480px) {
        font-size: 24px;
    }
`
export const ContactSection = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    
    ul {
        margin: 0;
        padding: 0;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
        
        ul {
            margin-left: 12px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
`

export const PhoneItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
        img {
            width: 20px;
            height: auto;
        }
    }

    @media (max-width: 480px) {
        display: flex;
        gap: 5px;
        text-align: center;

        img {
            width: 15px;
            height: auto;
        }
    }
`