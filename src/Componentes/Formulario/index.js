import React, { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [produto, setProduto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");

  const salvar = (evento) => {
    evento.preventDefault();
    props.produtoCadastrado({
      produto,
      descricao,
      imagem,
      categoria,
    });
    setProduto('')
    setCategoria('')
    setImagem('')
    setDescricao('')
  };

  return (
    <section className="formulario">
      <form onSubmit={salvar}>
        <h2>Preencha os dados para adicionar o produto ao cardápio</h2>
        <CampoTexto
          obrigatorio={true}
          label="Produto"
          placeholder="Digite o nome do produto"
          valor={produto}
          aoAlterado={(valor) => setProduto(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Descrição"
          placeholder="De uma breve descrição do produto"
          valor={descricao}
          aoAlterado={(valor) => setDescricao(valor)}
        />
        <CampoTexto
          obrigatorio={false}
          label="Imagem"
          placeholder="Informe o endereco URL da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={false}
          label="Categoria de Produto"
          item={props.listaCategorias}
          valor={categoria}
          aoAlterado={(valor) => setCategoria(valor)}
        />
        <Botao>Adicionar</Botao>
      </form>
    </section>
  );
};

export default Formulario;
