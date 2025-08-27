function Formulario(){

    function cadastrar(e){
        console.log('cadastrou um usuário')
        e.preventDefault()
    }

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Formulario