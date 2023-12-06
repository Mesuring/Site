import style from './login.module.css'
import { Link } from 'react-router-dom'

function LoginComponent(){
    return(
        <main>
            <form>
                <div className={style.box}>
                    <h1>Login</h1>
                    <label>E-mail</label>
                    <input type="email" id={style.email} />
                        
                    <label>Senha</label>
                    <input type="password" id={style.senha} name="senha" />
                        
                    <button type="submit">Logar</button>
                    <p>Não possui conta? <Link to="/Cadastro">Criar</Link></p>
                </div>
            </form>
        </main>
    )
}

export default LoginComponent