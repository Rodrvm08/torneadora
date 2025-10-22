import styled from "styled-components";
import { cores } from "../../globalstyle";

export const Container = styled.div`
    background-color: ${cores.cinza};
    padding: 20px 0;
`
export const Info = styled.p`
    margin-left: 23px;
    font-size: 64px;
    line-height: 65px;
`
export const Telefone = styled.li`
    list-style: none;
    font-size: 64px;
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
`

export const PhoneItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`