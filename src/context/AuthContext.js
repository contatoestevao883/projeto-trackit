import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export default function AuthProvider({children}) {
        const [loading, setLoading] = useState(false)
        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");
        const [nome, setNome] = useState("");
        const [foto, setFoto] = useState("");
        const [habit, setHabit] = useState("")
        const [days, setDays] = useState([0, 1, 2, 3, 4, 5, 6])
        const token = window.localStorage.getItem("token")
        const navigate = useNavigate()
    
        
        function signUp(event){
            event.preventDefault()
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{
                email: email,
                name: nome,
                image: foto,
                password: senha
            })
            promise.then(res => {
                console.log(res.data)
                window.localStorage.clear()
                window.localStorage.setItem("image", res.data.image)
                setLoading(!loading)
                navigate("/")
            })
            promise.catch(err => {
                console.log(err.response.data.message)
                alert(err.response.data.details)
                setLoading(!loading)
            })
        }  

        function signIn(event){
            event.preventDefault()
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
                email: email,
                password: senha
            })
            promise.then((res) =>{
                console.log(res.data)
                window.localStorage.setItem("token", res.data.token)
                window.localStorage.setItem("id", res.data.id)
                navigate("/habitos")
            })
            promise.catch((err) =>{
                console.log(err.response.data.message)
                alert("Usuário e/ou senha inválidos!")
                setLoading(!loading)
            })
        }
    
        function newHabit(event){
            event.preventDefault()
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
                name: habit,
                days: days
            },
            {headers : { Authorization: `Bearer ${token}` } 
            })
            promise.then((res) =>{
                console.log(res.data)
                window.localStorage.removeItem("id")
                window.localStorage.setItem("id", res.data.id)
                window.location.reload()
            })
            promise.catch((err) =>{
                console.log(err.response.data.message)
                alert(err.response.data.details)
            })
        }
        
    
        return(
            <AuthContext.Provider value ={{ email, senha, nome, foto, habit, days, setDays, setHabit, setEmail, setSenha, setNome, setFoto, signUp, signIn, newHabit}}>
                {children}
            </AuthContext.Provider>
        )
    
    }