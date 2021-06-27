import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Table, Titulo, ConteudoTitulo, BotaoAcao, ButtonInfo, ButtonPrimary, ButtonWarning, ButtonDanger, AlertSuccess, AlertDanger } from './styles';

export const Home = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState([]);

    const getProdutos = async () => {
        fetch("http://localhost/api-php/index.php")
            .then((response) => response.json())
            .then((responseJson) => (
                setData(responseJson.records)
            ));
    }

    const excluirProduto = async (idProduto) => {
        fetch("http://localhost/api-php/excluir.php?id=" + idProduto)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.erro) {
                    setStatus({
                        type: 'erro',
                        mensagem: responseJson.mensagem
                    });
                } else {
                    setStatus({
                        type: 'success',
                        mensagem: responseJson.mensagem
                    });
                    getProdutos();
                }
            }).catch(() => {
                setStatus({
                    type: 'erro',
                    mensagem: "Erro: Produto não pode ser excluído! Tente mais tarde."
                });
            });
    };

    useEffect(() => {
        getProdutos();
    }, [])

    return (
        <Container>
            <ConteudoTitulo>
                <Titulo>
                    Listar
                </Titulo>
                <BotaoAcao>
                    <Link to="/cadastrar">
                        <ButtonInfo>
                            Cadastrar
                        </ButtonInfo>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>

            {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
            {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}

            <Table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(data).map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.titulo}</td>
                            <td>{produto.descricao}</td>
                            <td>
                                <Link to={"/visualizar/" + produto.id}><ButtonPrimary>Visualizar</ButtonPrimary></Link>
                                {" "}
                                <Link to={"/editar/" + produto.id}><ButtonWarning>Editar</ButtonWarning></Link>
                                {" "}
                                <ButtonDanger
                                    onClick={() => excluirProduto(produto.id)}>
                                    Excluir
                                </ButtonDanger>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}