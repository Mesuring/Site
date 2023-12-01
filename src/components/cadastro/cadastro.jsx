import blogFetch from "../../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { Link } from 'react-router-dom'
import style from './cadastro.module.css'

function CadastroComponent(){
    const navigate = useNavigate()
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [aniversario, setAniversario] = useState();
    const [cep, setCep] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const criaCadastro = (e) => {
        e.preventDefault();
        
        console.log('Dados enviados:', { nome, cpf, aniversario, cep, email, senha })
    }
    return(
        <main>
            <form onSubmit={(e) => criaCadastro(e)}>
                <div className={style.box}>
                    <h1>Criar conta</h1>
                    <label>Nome</label>
                    <input type="text" id={style.nome} onChange={(e) => setNome(e.target.value)}/>
                    
                    <label>CPF</label>
                    <input type="number" id={style.cpf} onChange={(e) => setCpf(e.target.value)}/>
                    
                    <label>Aniversário</label>
                    <input type="date" id={style.aniversario} onChange={(e) => setAniversario(e.target.value)}/>
                    
                    <label>Cep</label>
                    <input type="number" id={style.cep} onChange={(e) => setCep(e.target.value)}/>

                    <label>E-mail</label>
                    <input type="email" id={style.email} onChange={(e) => setEmail(e.target.value)}/>

                    <label>Senha</label>
                    <input type="password" id={style.senha} onChange={(e) => setSenha(e.target.value)}/>
                        
                    <button type="submit">Criar</button>
                    <p>Já possui conta? <Link to="/Login">Login</Link></p>
                </div>
            </form>
        </main>
    )
}

export default CadastroComponent