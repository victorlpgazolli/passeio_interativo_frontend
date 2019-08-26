import React from 'react';
import './Login.css';
import api from '../services/api';
var local = {
    title: "",
    description: ""
}
export default function CadastrarLocal({ history }) {
    async function handleSubmit(e){
        e.preventDefault();
        if(local.title && local.description){
            const response = await api.post('/cadastrar',{
                title: local.title,
                description: local.description
            })
            const { _id: id } = JSON.parse(JSON.stringify(response.data))
            history.push('/showQr/'+ id ) 
        }else{
            alert("Digite os valores corretamente")
        }
    }
  return (
    <div className="login-container">
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
            onChange={(val) => local.title = val.target.value}
            placeholder="Nome do local"
            />
             <textarea 
            onChange={(val) => local.description = val.target.value}
            placeholder="Decrição do local"
            />
            <button type="submit">Cadastrar</button>
        </form>
        <button onClick={() => history.push("/cadastrarLocal")} className="bottomButtons left">
                <h4>Cadastrar local</h4>
            </button>
            <button onClick={() => history.push("/main")} className="bottomButtons right">
                <h4>Ver locais</h4>
        </button>
    </div>
  );
}


