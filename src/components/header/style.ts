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
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const Titulo = styled.p`
    font-size: 64px;
    margin: 0;
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
`