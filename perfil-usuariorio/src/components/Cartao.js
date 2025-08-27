function Cartao(props){
    return(
        <div>
        <div className='fotousuario'>
        <img src={props.foto} alt={props.nome}/>
        </div>
        <h2>Nome: {props.nome}</h2>
        <p>Profissão: {props.profissao}</p>
        <p>Descrição: {props.descricao}</p>
        </div>
        )
}

export default Cartao;
