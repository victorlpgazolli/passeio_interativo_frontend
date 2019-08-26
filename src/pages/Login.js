import React from 'react';
import './Login.css';

export default function Login({ history }) {
  return (
    <div className="login-container">
        <form>
            <input 
            placeholder="Digite seu nome"
            />
            <button type="submit" onClick={() => history.push("/main")}>Entrar</button>
            <button type="submit" className="register" onClick={() => history.push("/register")}>Criar conta</button>
        </form>
    </div>
  );
}


