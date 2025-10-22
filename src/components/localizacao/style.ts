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
`
export const Texto = styled.p`
    margin-left: 23px;
    font-size: 64px;
    line-height: 65px;
`