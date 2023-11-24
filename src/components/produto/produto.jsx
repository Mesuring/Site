import style from "./produto.module.css"
import { Link } from "react-router-dom"

function ProdutoComponet({ img, texto, estrela, valor, id }) {

    console.log(localStorage.getItem(img));

    return (
        <div className={style.produto}>
            <div class={style.boximagem}>
                <img src={img} id={style.imgProduto} width="225" height="168" />
            </div>
            <div class={style.boxtexto}>
                {texto}
            </div>
            <div class={style.boxavaliacao}>
                <img src={estrela} id="estrela" width="144" height="47" />
            </div>
            <div class={style.boxvalor}>
                {valor}
            </div>
            <Link to={id} onClick={localStorage.setItem("img", img)}>
                <div class={style.boxcomprar}>
                    COMPRAR
                </div></Link>
        </div>
    )
}

export default ProdutoComponet