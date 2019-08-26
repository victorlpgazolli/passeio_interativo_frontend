import React, {useEffect} from 'react';
import './Login.css';
import api from '../services/api';

export default function Local({ history , match },) {
    var local = {}
    useEffect(() => {
        async function getQr(){
            const { id } = match.params;
            const response = await api.get('/local/'+id)   
            local = {
                title: response.data.response.title,
                description: response.data.response.description
            } 
        }
        getQr()
    },[])
    
    
  return (
    <div className="login-container">
        <div>
            <h2>{local.title}</h2>
            <p>{local.description}</p>
        </div>
       
        <button onClick={() => history.push("/cadastrarLocal")} className="bottomButtons left">
                <h4>Cadastrar local</h4>
            </button>
            <button onClick={() => history.push("/main")} className="bottomButtons right">
                <h4>Ver locais</h4>
        </button>
    </div>
  );
}


