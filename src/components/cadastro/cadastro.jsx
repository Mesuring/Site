import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'; 

import style from './cadastro.module.css';

const validation = yup.object().shape({
    nome: yup.string().required(),
    cpf: yup.number().required(),
    aniversario: yup.date().required(),
    cep: yup.number().required(),
    email: yup.string().required(),
    senha: yup.string().required()
});

function CadastroComponent() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation),
    });

    const [errorMessage, setErrorMessage] = React.useState('');

    const criaCadastro = (data) => {
        // verifica se há erros antes de enviar os dados
        if (Object.keys(errors).length === 0) {
        console.log('Dados enviados:', data);
        setErrorMessage(''); // Limpa a mensagem de erro se não houver erros
        } else {
        setErrorMessage('Preencha todos os campos.');
        }
    }; 

    return (
        <main>
        <form onSubmit={handleSubmit(criaCadastro)}>
            <div className={style.box}>
            <h1>Criar conta</h1>
            <label>Nome</label>
            <input type="text" id={style.nome} {...register('nome')} />

            <label>CPF</label>
            <input type="number" id={style.cpf} {...register('cpf')} />

            <label>Aniversário</label>
            <input type="date" id={style.aniversario} {...register('aniversario')} />

            <label>Cep</label>
            <input type="number" id={style.cep} {...register('cep')} />

            <label>E-mail</label>
            <input type="email" id={style.email} {...register('email')} />

            <label>Senha</label>
            <input type="password" id={style.senha} {...register('senha')} />

            <p className={style.erroMessage}>
                {Object.values(errors).length > 0 && 'Preencha todos os campos'}
            </p>

            <button type="submit">Criar</button>
            <p>Já possui conta? <Link to="/Login">Logar</Link></p>
            </div>
        </form>
        </main>
    );
}

export default CadastroComponent;