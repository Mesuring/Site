import style from './login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function LoginComponent(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();   

    if (!email) {
        setError("Por favor, preencha o campo email.");
        return;
    }

    if (!senha) {
        setError("Por favor, insira a senha.");
        return;
    }

    const verificaLogin = async (e) => {
        try {
        const res = await axios.post('http://localhost:3001/cliente/login', {
            email: email,
            senha: senha,
        });

        const token = res.data.token;
        localStorage.setItem('token', token);

        navigate('/home');
        } catch (error) {
            setError("falha ao fazer login.")
            console.error('Erro no login:', error);
        }
    };

    return(
        <main>
            <div className={style.form}>
                <div className={style.box}>
                    <h1>Login</h1>
                    <label>E-mail</label>
                    <input 
                        type="text" 
                        id={style.email} 
                        value={email} 
                        onChange={(e) => (setEmail(e.target.value), setError(''))}/>
                        
                    <label>Senha</label>
                    <input 
                        type="password" 
                        id={style.senha} 
                        value={senha} 
                        onChange={(e) => (setSenha(e.target.value), setError(''))}/>

                    {error && <p className={style.error}>{error}</p>}

                    <button onClick={verificaLogin}>Logar</button>
                    <p>Não possui conta? <Link to="/cadastro">Criar</Link></p>
                </div>
            </div>
        </main>
    )
}

export default LoginComponent