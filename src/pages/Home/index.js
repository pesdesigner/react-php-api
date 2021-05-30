import React, { useEffect, useState } from 'react';

import { Wrapper, Table, Titulo } from './styles';

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
        <Wrapper>
            <Titulo>
                Listar
            </Titulo>
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
                            <td>Visualizar Editar Apagar</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Wrapper>
    );
}