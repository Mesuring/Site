import style from './login.module.css'
import { Link } from 'react-router-dom'

function LoginComponente(){
    return(
        <main>
            <div className={style.container}>
                <div className={style.box}>
                    <h1>Login</h1>
                    <label>E-mail:</label>
                    <input type="text" id={style.email} placeholder="Digite seu e-mail"/>
                        
                    <label>Senha:</label>
                    <input type="password" id={style.senha} name="senha" placeholder="Digite sua senha"/>
                        
                    <button type="submit">Logar</button>
                    <p>não tem um cadastro? <Link to="/Cadastro">clique aqui!</Link></p>
                </div>
            </div>
        </main>
    )
}

export default LoginComponente