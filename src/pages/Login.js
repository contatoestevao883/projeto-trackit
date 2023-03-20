import logo from '../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function Login(){
    const [loading, setLoading] = useState(false)
    const { signIn} = useContext(AuthContext)
    return(
        <DivContainer onSubmit={signIn}>
                <Logo src={logo} />
                <Input data-test="email-input" placeholder="email" required/>
                <Input data-test="password-input" placeholder="senha" required/>
                <Button data-test="login-btn" type="submit">Entrar</Button>
                <Link data-test="signup-link" to={"/cadastro"}>
                    <Span>Não tem uma conta? Cadastre-se!</Span>
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
    margin-top: 80px;
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