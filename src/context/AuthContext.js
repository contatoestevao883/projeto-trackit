import axios from "axios";
import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export default function AuthProvider({children}) {
        const [loading, setLoading] = useState(false)
        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");
        const [nome, setNome] = useState("");
        const [foto, setFoto] = useState("");
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
                navigate("/habitos")
            })
            promise.catch((err) =>{
                console.log(err.response.data.message)
            })
        }
    

       
        return(
            <AuthContext.Provider value ={{ email, senha, nome, foto, setEmail, setSenha, setNome, setFoto, signUp, signIn }}>
                {children}
            </AuthContext.Provider>
        )
    
    }