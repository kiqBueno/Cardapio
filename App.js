import { useState } from "react";
import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Categoria from "./Componentes/Categoria";

function App() {
  const categorias = [
    {
      nome: "Combos",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Avulsos",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      nome: "Acompanhamentos",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Bebidas",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Sobremesas",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
  ];

  const [cadastro, setCadastro] = useState([]);
  const produtoAdicionado = (produto) => {
    console.log(produto);
    setCadastro([...cadastro, produto]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
      listaCategorias={categorias.map(categoria => categoria.nome)} 
      produtoCadastrado={(produto) => produtoAdicionado(produto)} />
      {categorias.map((categoria) => (
        <Categoria
          key={categoria.nome}
          nome={categoria.nome}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          cadastro={cadastro.filter((produto) => produto.categoria === categoria.nome)}
        />
      ))}
    </div>
  );
}

export default App;
