import Card from "../Card";
import "./Categoria.css";

const Categoria = (props) => {
  const cssbk = { backgroundColor: props.corSecundaria };
  const cssbc = { borderColor: props.corPrimaria };
  return (
    props.cadastro.length > 0 && (
      <section className="categoria" style={cssbk}>
        <h3 style={cssbc}>{props.nome}</h3>
        <div className="produtos">
          {props.cadastro.map((card, index) => (
            <Card
              key={index}
              nome={card.produto}
              categoria={card.categoria}
              imagem={card.imagem}
              descricao={card.descricao}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Categoria;
