import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './cadastro.module.css';
import { data } from 'browserslist';
import axios from 'axios';

function CadastroComponent() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [aniversario, setAniversario] = useState("");
    const [cep, setCep] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const criaCadastro = (data) => {axios.post("http://localhost:3001/cliente/cadastro", data)
            .then(() => {
                console.log("deu certo")
            })
            .catch(() =>{
                console.log("deu errado")
            })
        }
    

    return (
        <main>
            <div className={style.form}>
                <div className={style.box}>
                <h1>Criar conta</h1>
                <label>Nome</label>

                <input 
                type="text" 
                id={style.nome} 
                value={nome} 
                onChange={(e) => [setNome(e.target.value), setError("")]}
                />

                <label>CPF</label>
                <input 
                type="number" 
                id={style.cpf} 
                value={cpf} 
                onChange={(e) => [setCpf(e.target.value), setError("")]} 
                />

                <label>Aniversário</label>
                <input 
                type="date" 
                id={style.aniversario}  
                value={aniversario} 
                onChange={(e) => [setAniversario(e.target.value), setError("")]}
                />

                <label>Cep</label>
                <input 
                type="number" 
                id={style.cep} 
                value={cep} 
                onChange={(e) => [setCep(e.target.value), setError("")]}
                />

                <label>E-mail</label>
                <input 
                type="email" 
                id={style.email} 
                value={email} 
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

                <label>Senha</label>
                <input 
                type="password" 
                id={style.senha}
                value={senha} 
                onChange={(e) => [setSenha(e.target.value), setError("")]}
                />

                <labelError>{error}</labelError>

                <button onClick={criaCadastro}>Criar</button>
                <p>Já possui conta? <Link to="/Login">Logar</Link></p>
                </div>
            </div>
        </main>
    );
}

export default CadastroComponent;