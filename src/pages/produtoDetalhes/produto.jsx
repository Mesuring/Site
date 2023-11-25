import { useParams } from "react-router-dom"
import DadosProdutoComponet from "../../components/dadosProduto/dadosProduto";
import style from "./produtoDetalhes.module.css"

function ProdutoPage() {
    
    return (
        <main>
            <DadosProdutoComponet/>
        </main>
    )
}

export default ProdutoPage