import style from './nav.module.css'
import { Link } from "react-router-dom"

function NavComponent() {
    return (
        <nav>
            <div className={style.barra}>
                {<div className={style.text}>
                    <Link to="/Buque-flores">Buquês de flores</Link>
                    <Link to="/Arranjo-de-flores">Arranjo de flores</Link>
                    <Link to="/Vazo-de-flores">Vazo de flores</Link>
                    <Link to="/Cesta-de-flores">Cesta de flores</Link>
                    <Link to="/Presentes">Presentes</Link>
                </div>}
            </div>
        </nav>
    )
}

export default NavComponent