import styled from "styled-components";
import { cores } from "../../globalstyle";

export const Container = styled.div`
    background-color: ${cores.cinza};
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 1024px) {
        gap: 30px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding: 15px 0;
    }
    
    @media (max-width: 480px) {
        gap: 20px;
        padding: 10px 0;
    }
`

export const ServicesContainer = styled.div`
    flex: 1;
    
    ul {
        margin: 0;
        padding: 0;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Title = styled.p`
    margin-left: 23px;
    font-size: 64px;
    line-height: 65px;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
        font-size: 48px;
        line-height: 50px;
        margin-bottom: 25px;
    }
    
    @media (max-width: 768px) {
        font-size: 36px;
        line-height: 40px;
        margin-left: 15px;
        margin-bottom: 20px;
    }
    
    @media (max-width: 480px) {
        font-size: 28px;
        line-height: 32px;
        margin-left: 10px;
        margin-bottom: 15px;
    }
`

export const Servicolist = styled.li`
    list-style: none;
    font-size: 40px;
    max-width: 600px;
    margin-left: 30px;
    margin-bottom: 20px;
    padding: 15px 20px;
    background-color: ${cores.cinza};
    border-radius: 10px;
    border-left: 4px solid ${cores.azul};
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateX(5px);
    }

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 1024px) {
        font-size: 32px;
        max-width: 500px;
        margin-left: 25px;
        margin-bottom: 15px;
        padding: 12px 16px;
    }
    
    @media (max-width: 768px) {
        font-size: 24px;
        max-width: 100%;
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 12px;
        padding: 10px 14px;
    }
    
    @media (max-width: 480px) {
        font-size: 18px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 8px 12px;
        border-left: 3px solid ${cores.azul};
    }
`

export const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 0 0 auto;

    img {
        margin-right: 20px;
        border-radius: 15px;
        width: 350px;
        height: auto;
        object-fit: cover;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 1024px) {
        gap: 25px;
        
        img {
            width: 250px;
            height: 180px;
        }
    }
    
    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        
        img {
            margin-right: 0;
            width: 250px;
            height: 150px;
        }
    }
    
    @media (max-width: 480px) {
        gap: 15px;
        
        img {
            width: 150px;
            height: 120px;
            border-radius: 10px;
        }
    }
`