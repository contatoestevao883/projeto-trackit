import logo from '../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <DivContainer>
                <Logo src={logo} />
                <Input placeholder="email"/>
                <Input placeholder="senha" />
                <Button>Entrar</Button>
                <Link to={"/cadastro"}>
                    <Span>Não tem uma conta? Cadastre-se!</Span>
                </Link>
                <Link to={"/habitos"}>
                    <Span>2</Span>
                </Link>
        </DivContainer>

    )

}

const Logo = styled.img`
    margin-bottom: 30px;
    height: 200px;
    width: 220px;
`
const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
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