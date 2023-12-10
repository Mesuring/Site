import style from './login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function LoginComponent(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();   

    const verificaLogin = async () => {
        try {
        const response = await axios.post('http://localhost:3001/cliente/login', {
            email: email,
            senha: senha,
        });
            // Verifica se o login foi bem-sucedido com base na resposta do backend
            if (response.data.success) {
                console.log('Login bem-sucedido:', response.data);
                navigate('/home');

            } else {
                // Se a senha estiver incorreta, exibe uma mensagem de erro
                setError('Senha incorreta. Tente novamente.');
                console.log("erro:", error)
            }
        } catch (error) {
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
                    <p>Não possui conta? <Link to="/Cadastro">Criar</Link></p>
                </div>
            </div>
        </main>
    )
}

export default LoginComponent