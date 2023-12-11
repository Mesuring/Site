import style from './nav.module.css'
import { Link } from "react-router-dom"

function NavComponent() {
    return (
        <nav>
            <div className={style.barra}>
                {<div className={style.text}>
                    <Link to="/buque-flores">Buquês de flores</Link>
                    <Link to="/arranjo-de-flores">Arranjo de flores</Link>
                    <Link to="/vazo-de-flores">Vazo de flores</Link>
                    <Link to="/cesta-de-flores">Cesta de flores</Link>
                    <Link to="/presentes">Presentes</Link>
                </div>}
            </div>
        </nav>
    )
}

export default NavComponent