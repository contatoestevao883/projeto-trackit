import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthProvider from "./context/AuthContext";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Login from "./pages/Login";


export default function App() {

  return (
   
        <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/habitos" element={<Habitos />}/>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
    );
}

