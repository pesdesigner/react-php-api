import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Titulo, BotaoAcao, ButtonInfo, Container, ConteudoForm, ConteudoTitulo, Form, Label, Input, ButtonSuccess, AlertDanger, AlertSuccess } from './styles';

export const Editar = (props) => {

    const [id] = useState(props.match.params.id);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const editProduto = async e => {
        e.preventDefault();

        await fetch("http://localhost/api-php/editar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({ id, titulo, descricao })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.erro) {
                    setStatus({
                        type: 'erro',
                        mensagem: responseJson.mensagem
                    })
                } else {
                    setStatus({
                        type: 'success',
                        mensagem: responseJson.mensagem
                    })
                }

            }).catch(() => {
                setStatus({
                    type: 'erro',
                    mensagem: 'Produto não foi editado, tente mais tarde!'
                })
            })
    }

    useEffect(() => {
        const getProduto = async () => {
            await fetch("http://localhost/api-php/visualizar.php?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    setTitulo(responseJson.produto.titulo);
                    setDescricao(responseJson.produto.descricao);
                });
        }
        getProduto();
    }, [id]);


    return (
        <Container>
            <ConteudoForm>
                <ConteudoTitulo>
                    <Titulo>Editar</Titulo>
                    <BotaoAcao>
                        <Link to="/">
                            <ButtonInfo>
                                Listar
                            </ButtonInfo>
                        </Link>
                    </BotaoAcao>
                </ConteudoTitulo>

                {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
                {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}

                <Form onSubmit={editProduto}>
                    <Label>Título: </Label>
                    <Input type="text" name="titulo" placeholder="Título do produto" value={titulo} onChange={e => setTitulo(e.target.value)} /><br /><br />

                    <Label>Descrição: </Label>
                    <Input type="text" name="descricao" placeholder="Descrição do produto" value={descricao} onChange={e => setDescricao(e.target.value)} /><br /><br />

                    <ButtonSuccess type="submit">Atualizar</ButtonSuccess>
                </Form>
            </ConteudoForm>
        </Container>
    );
}