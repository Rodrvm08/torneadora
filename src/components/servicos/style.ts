import styled from "styled-components";
import { cores } from "../../globalstyle";

export const Container = styled.div`
    background-color: ${cores.cinza};
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const ServicesContainer = styled.div`
    flex: 1;
    
    ul {
        margin: 0;
        padding: 0;
    }
`

export const Title = styled.p`
    margin-left: 23px;
    font-size: 64px;
    line-height: 65px;
    margin-bottom: 30px;
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
`

export const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 0 0 auto;

    img {
        margin-right: 20px;
        border-radius: 15px;
        width: 300px;
        height: 200px;
        object-fit: cover;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
`