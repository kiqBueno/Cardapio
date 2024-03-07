import "./Card.css";

const Card = (props) => {
  const fundo = { backgroundColor: props.corDeFundo };
  return (
    <div className="card">
      <div className="cabecalho" style={fundo }>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.categoria}</h5>
      </div>
    </div>
  );
};

export default Card;
