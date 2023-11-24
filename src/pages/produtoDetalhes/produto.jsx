import { useParams } from "react-router-dom"
import DadosProdutoComponet from "../../components/dadosProduto/dadosProduto";
import style from "./produtoDetalhes.module.css"

function ProdutoPage() {
    
    return (
        <div className={style.main}>
            <DadosProdutoComponet/>
        </div>
    )
}

export default ProdutoPage