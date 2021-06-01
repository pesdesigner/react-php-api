import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    box-shadow: 0 0 1em #6c757d;
`;

export const ConteudoTitulo = styled.section`
   display: flex;
   justify-content: space-between;
`;

export const BotaoAcao = styled.section`
   margin: 30px 0;
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

export const Form = styled.form`
    margin: 0px auto;
`;

export const ConteudoForm = styled.section`
    max-width: 960px;
    padding: 10px 30px 30px;
`;

export const Label = styled.label`
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    margin-bottom: 16px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`;

export const ButtonSuccess = styled.button`
    background-color: #fff;
    color: #198754;
    font-size: 18px;
    padding: 8px 12px;
    border: 1px solid #198754;
    border-radius: 4px;
    :hover{
        background-color: #157347;
        color: #fff;
    }
`;

export const AlertSuccess = styled.p`
    background-color: #d1e7dd;
    color: #0f5132;
    margin: 20px 0;
    border: 1px solid #badbcc;
    border-radius: 6px;
    padding: 6px;
`;

export const AlertDanger = styled.p`
    background-color: #f8d7da;
    color: #842029;
    margin: 20px 0;
    border: 1px solid #f5c2c7;
    border-radius: 6px;
    padding: 6px;
`;
