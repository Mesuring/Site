import style from './header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import lupa from '../../img/lupa-preta.png'
import perfil from '../../img/perfil.png'
import carrinho from '../../img/carrinho.png'

function HeaderComponent(){
    return (
        <header>
            <div classNameName={style.logo}>
                <Link to="/"><img src={logo} width="208px" height="118" /></Link>
            </div>
            <div className={style.busca}>
                <div className={style.campoBusca}>
                    <input type="text" placeholder="Buscar..." id={style.inpBusca}/>
                </div>
                <div id={style.lupa}>
                    <img src={lupa} width="30px" height="30px"/>
                </div>
            </div>
            <div className={style.botoes}>
                <div className={style.perfil}>
                    <img src={perfil} width = "55px" height="55px"/>
                </div>
                <div className={style.loginText}>
                    Bem vindo(a)<br/>
                    <Link to="/Login">Entrar</Link> ou <Link to="/Cadastro">Cadastrar</Link>
                </div>
                <div className={style.carinho}>
                    <img src={carrinho} width="55px" height="55px"/>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent   