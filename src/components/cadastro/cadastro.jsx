import { Link } from 'react-router-dom'
import style from './cadastro.module.css'

function CadastroComponent(){
    return(
        <main>
            <div className={style.container}>
                <div className={style.box}>
                    <h1>Criar conta</h1>
                    <label>Nome</label>
                    <input type="text" id={style.nome}/>
                    
                    <label>CPF</label>
                    <input type="number" id={style.cpf}/>
                    
                    <label>Aniversário</label>
                    <input type="date" id={style.niver}/>
                    
                    <label>Cep</label>
                    <input type="number" id={style.cep}/>

                    <label>E-mail</label>
                    <input type="email" id={style.email}/>

                    <label>Senha</label>
                    <input type="password" id={style.senha}/>
                        
                    <button type="submit">Criar</button>
                    <p>Já possui conta? <Link to="/Login">Login</Link></p>
                </div>
            </div>
        </main>
    )
}

export default CadastroComponent