import logo from '../assets/logo.png'
import styled from 'styled-components'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

export default function Cadastro(){
    const [loading, setLoading] = useState(false)
    const { signUp, nome, email, foto, senha, setEmail, setSenha, setNome, setFoto } = useContext(AuthContext)
    
    return(
        <DivContainer onSubmit={signUp}>
            <Logo src={logo} />
            <Input data-test="email-input" type="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)} required disabled={loading}/>
            <Input data-test="password-input" type="password" value={senha} placeholder="senha" onChange={e => setSenha(e.target.value)} required disabled={loading}/>
            <Input data-test="user-name-input" type="text" value={nome} placeholder="nome" onChange={e => setNome(e.target.value)} required disabled={loading}/>
            <Input data-test="user-image-input" type="text" value={foto} placeholder="foto" onChange={e => setFoto(e.target.value)} required disable={loading}/>
            <Button data-test="signup-btn" type="submit">Cadastrar</Button>
            <Link data-test="login-link" to={"/"}>
                <Span>Já tem uma conta? Faça login!</Span>
            </Link>
        </DivContainer>
    )

}

const Logo = styled.img`
    margin-bottom: 30px;
    height: 200px;
    width: 220px;
`
const DivContainer = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`   
const Input = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-top: 5px;
    ::placeholder{
        color: #DBDBDB;
        padding-left: 10px;
        font-size:20px;
        font-family: 'Lexend Deca';
    }
`
const Button = styled.button`
    box-sizing: content-box;
    width: 300px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-size: 21px;
    font-family: 'Lexend Deca';
    color: #FFFFFF;
    border-style: none;
    margin-top: 5px;
    margin-bottom: 20px;
`

const Span = styled.span`
    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
    font-family: 'Lexend Deca';
`