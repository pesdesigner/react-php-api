import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Table, Titulo, ConteudoTitulo, BotaoAcao, ButtonInfo, ButtonPrimary } from './styles';

export const Home = () => {

    const [data, setData] = useState([]);

    const getProdutos = async () => {
        fetch("http://localhost/api-php/index.php")
            .then((response) => response.json())
            .then((responseJson) => (
                setData(responseJson.records)
            ));
    }

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
                                <Link to={"/visualizar/" + produto.id}><ButtonPrimary>View</ButtonPrimary></Link>
                                {" "}
                                <Link to={"/editar/" + produto.id}><ButtonPrimary>Editar</ButtonPrimary></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}