import { Link } from "react-router-dom"
import style from "./home.module.css"
import ProdutoComponet from "../../components/produto/produto"
import buque from "../../img/buque.png"
import buque1 from "../../img/buque1.png"
import buque2 from "../../img/buque2.png"
import buque3 from "../../img/buque3.png"
import buque4 from "../../img/buque4.png"
import arranjo from "../../img/arranjo.png"
import arranjo1 from "../../img/arranjo1.png"
import arranjo2 from "../../img/arranjo2.png"
import arranjo3 from "../../img/arranjo3.png"
import arranjo4 from "../../img/arranjo4.png"
import estrela5 from "../../img/estrela5.png"
import estrela4 from "../../img/estrela4.png"
import estrela3 from "../../img/estrela3.png"

function HomePage(){
    return (
        <div className={style.todosProdutos}>
            <div className={style.conteiner}>
                <ProdutoComponet img={buque} texto="Buquê de Rosas e Alstroemérias Coloridas" estrela={estrela5} valor="R$91,36" id="/1"/>
                <ProdutoComponet img={buque1} texto="Buquê Colorido de Rosas, Alstroemérias, Gérberas..." estrela={estrela4} valor="R$149,48" id="/2"/>
                <ProdutoComponet img={buque2} texto="Buquê de Flores do Campo Coloridas com Rosas e M..." estrela={estrela3} valor="R$148,90" id="/3"/>
                <ProdutoComponet img={buque3} texto="Buquê de Flores do Campo Coloridas" estrela={estrela4} valor="R$71,20" id="/4"/>
                <ProdutoComponet img={buque4} texto="Buquê de 30 Rosas Coloridas" estrela={estrela4} valor="R$274,86" id="/5"/>
            </div>
            <div className={style.conteiner}>
                <ProdutoComponet img={arranjo} texto="Arranjo de Rosas Laranjas em Vaso Para Entrega" estrela={estrela5} valor="R$99,68" id="/6"/>
                <ProdutoComponet img={arranjo1} texto="Arranjo de Rosas Lilás em Vaso de Vidro" estrela={estrela4} valor="R$89,82" id="/7"/>
                <ProdutoComponet img={arranjo2} texto="Arranjo de Rosas Pink em Vaso de Vidro" estrela={estrela3} valor="R$104,09" id="/8"/>
                <ProdutoComponet img={arranjo3} texto="Arranjo de Rosas Brancas Em Vaso" estrela={estrela4} valor="R$103,68" id="/9"/>
                <ProdutoComponet img={arranjo4} texto="Arranjo de 10 Alstroemérias Creme" estrela={estrela4} valor="R$95,08" id="/10"/>
            </div>  
        </div>
    )
}

export default HomePage