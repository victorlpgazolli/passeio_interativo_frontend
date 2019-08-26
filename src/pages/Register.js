import React from 'react';
import './Login.css';

export default function Register({ history }) {
  return (
    <div className="login-container">
        <form>
            <input 
            placeholder="Digite seu nome"
            />
             <input 
            placeholder="Digite sua senha"
            />
            <button type="submit" onClick={() => history.push("/main")}>Entrar</button>
        </form>
    </div>
  );
}


