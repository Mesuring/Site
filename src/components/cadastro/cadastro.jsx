import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogFetch from '../../axios/config.js'
import style from './cadastro.module.css';
import axios from 'axios';

function CadastroComponent() {
    const [cpfCliente, setcpfCliente] = useState("");
    const [firNome, setFirNome] = useState("");
    const [meioNome, setMeioNome] = useState("");
    const [ultNome, setUltNome] = useState("");
    const [Email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [numCasa, setNumCasa] = useState("");
    const [aniversario, setAniversario] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const criaCadastro = () => {    
    // Verificações para o campo "primeiro nome"
    if (!firNome) {
        setError("Por favor, preencha o campo Nome.");
        return;
    }

    if (/\d/.test(firNome)) {
        setError("O nome não pode ter números.");
        return;
    }

    // Verificações para o campo "primeiro nome"
    if (!meioNome) {
        setError("Por favor, preencha o campo Nome do meio.");
        return;
    }

    if (/\d/.test(firNome)) {
        setError("O nome do meio não pode ter números.");
        return;
    }

    // Verificações para o campo "primeiro nome"
    if (!ultNome) {
        setError("Por favor, preencha o campo último nome.");
        return;
    }

    if (/\d/.test(ultNome)) {
        setError("O último nome não pode ter números.");
        return;
    }

    // Verificações para o campo "CPF"
    if (!cpfCliente || cpfCliente.length !== 11) {
        setError("Por favor, insira um CPF válido.");
        return;
    }

    // Verificações para o campo "Aniversário"
    if (!aniversario) {
        setError("Por favor, selecione a data de aniversário.");
        return;
    }
    const dataAtual = new Date();
    const dataAniversario = new Date(aniversario);
    const diferencaAnos = dataAtual.getFullYear() - dataAniversario.getFullYear();

    // Se a diferença de anos for menor que 14, mostra uma mensagem de erro
    if (diferencaAnos < 14) {
        setError("Você deve ter pelo menos 14 anos.");
        return;
    }

    // Verificações para o campo "CEP"
    if (!cep || cep.length !== 8) {
        setError("Por favor, insira um CEP válido.");
        return;
    }

    // Verificações para o campo "E-mail"
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!Email || !EmailRegex.test(Email)) {
        setError("Por favor, insira um e-mail válido.");
        return;
    }

    // Verificações para o campo "Senha"
    if (!senha || senha.length < 6) {
        setError("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    const data = {
        cpfCliente: cpfCliente,
        firNome: firNome,
        meioNome: meioNome,
        ultNome: ultNome,
        Email: Email,
        cep: cep,
        numCasa: numCasa,   
        aniversario: aniversario,
        senha: senha
    };

    axios.post(blogFetch + "/cliente/cadastro", data, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    
        .then(() => {   
            console.log("Cadastro realizado com sucesso!")
        })
        .catch((error) => {
            console.error("Erro ao cadastrar:", error.response ? error.response.data : error.message);
            setError("Erro ao cadastrar. Verifique os dados e tente novamente.");
        }); 
    }

    return (
        <main>
        <div className={style.form}>
            <div className={style.box}>
                <div className={style.left}>
                    <h1>Criar conta</h1>
                    <label>Nome</label>
                    <input 
                        type="text" 
                        id={style.firNome} 
                        value={firNome} 
                        onChange={(e) => [setFirNome(e.target.value), setError("")]}
                    />

                    <label>Nome do Meio</label>
                    <input 
                        type="text" 
                        id={style.meioNome} 
                        value={meioNome} 
                        onChange={(e) => [setMeioNome(e.target.value), setError("")]}
                    />

                    <label>Último Nome</label>
                    <input 
                        type="text" 
                        id={style.ultNome} 
                        value={ultNome} 
                        onChange={(e) => [setUltNome(e.target.value), setError("")]}
                    />

                    <label>CPF</label>
                    <input 
                        type="number" 
                        id={style.cpfCliente} 
                        value={cpfCliente} 
                        onChange={(e) => [setcpfCliente(e.target.value), setError("")]} 
                    />

                    <label>Aniversário</label>
                    <input 
                        type="date" 
                        id={style.aniversario}  
                        value={aniversario} 
                        onChange={(e) => [setAniversario(e.target.value), setError("")]}
                    />
                </div>
                <div className={style.right}>
                    <label>Cep</label>
                    <input 
                        type="number" 
                        id={style.cep} 
                        value={cep} 
                        onChange={(e) => [setCep(e.target.value), setError("")]}
                    />

                    <label>Número da Casa</label>
                    <input 
                        type="text" 
                        id={style.numCasa} 
                        value={numCasa} 
                        onChange={(e) => [setNumCasa(e.target.value), setError("")]}
                    />

                    <label>E-mail</label>
                    <input 
                        type="email" 
                        id={style.Email} 
                        value={Email} 
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
        </div>
        </main>
    );
}

export default CadastroComponent;