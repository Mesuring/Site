import style from "./dadosProduto.module.css"
import buque1 from "../../img/buque1.png"
import estrela5 from "../../img/estrela5.png"
import { useParams } from "react-router-dom"

function DadosProdutoComponet() {
    const { id } = useParams();

    let img = localStorage.getItem("img")

    return (
        <main>
            <div classNameName={style.slider}>
                <img src={img} width="900px" height="675px" />
            </div>
            <div className={style.divs3}>
                <div className={style.div1}>
                    <img src={estrela5} width="109" height="37" />
                    <div className={style.textbox}>
                        <h3>arranjo flores</h3>
                    </div>
                    <div className={style.valorbox}>
                        R$159,90
                    </div>
                </div>
                <div className={style.div2}>
                    <h3>Endereço de entrega</h3>
                    <input type="text" id={style.endereco} placeholder="Bairro  - Cidade - UF..." />
                </div>
                <div className={style.div3}>
                    <div className={style.alinhaQuant}>
                        <div className={style.quantidade}>
                            quantidade: <input type="number" id={style.quantInp} />
                        </div>
                    </div>
                    <div className={style.carrinho}>
                        Adicionar ao carinho
                    </div>
                    <div className={style.compra}>
                        Comprar
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DadosProdutoComponet