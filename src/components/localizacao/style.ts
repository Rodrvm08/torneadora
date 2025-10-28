import styled from "styled-components";
import { cores } from "../../globalstyle";

export const Container = styled.div`
    background-color: ${cores.cinza};
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    gap: 40px;
    justify-content: space-between;
    
    iframe {
        border-radius: 15px;
        border: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-right: 20px;
    }

    @media (max-width: 1024px) {
        gap: 30px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        padding: 15px 0;
        
        iframe {
            margin-right: 0;
            width: 100%;
            max-width: 500px;
        }
    }
    
    @media (max-width: 480px) {
        gap: 15px;
        padding: 10px 0;
        
        iframe {
            border-radius: 10px;
            height: 300px;
        }
    }
`
export const Texto = styled.p`
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