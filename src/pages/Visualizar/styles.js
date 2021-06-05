import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 1em #6c757d;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding: 20px;
`;

export const ConteudoTitulo = styled.section`
   display: flex;
   justify-content: space-between;
`;

export const BotaoAcao = styled.section`
   margin: 20px 0;
`;

export const ButtonInfo = styled.button`
    background-color: #fff;
    color: #0dcaf0;
    font-size: 18px;
    padding: 8px 12px;
    border: 1px solid #0dcaf0;
    border-radius: 4px;
    cursor: pointer;
    :hover{
        background-color: #31d2f2;
        color: #fff;
    }
`;

export const Titulo = styled.h1`
    color: #3e3e3e;
    font-size: 23px;
`;

export const ConteudoProd = styled.p`
    color: #0d6efd;
    font-size: 16px;
`;