import { useParams } from "react-router-dom"

function ProdutoPage() {
    const {id} = useParams();
    
    return (
        <div>
            <h1>Exibindo informações do produto: {id}</h1>
        </div>
    )
}

export default ProdutoPage