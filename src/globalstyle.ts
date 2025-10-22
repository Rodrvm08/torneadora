import { createGlobalStyle } from "styled-components";

export const cores = {
    preto: "#000",
    amarelo: "#B7B21F",
    azul: "#3818A8",
    cinza: "#DEDEEB"
}

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Karantina';
    }
`