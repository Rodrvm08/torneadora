import styled from "styled-components";
import { cores } from "../../globalstyle";

export const FooterContainer = styled.div`
    background-color: ${cores.azul};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    margin-top: auto;

    @media (max-width: 768px) {
        padding: 15px 0;
    }
    
    @media (max-width: 480px) {
        padding: 10px 0;
        flex-direction: column;
        text-align: center;
    }
`
