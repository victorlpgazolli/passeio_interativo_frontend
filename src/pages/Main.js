import React from 'react';
import './Locais.css';
import  './Main.css'
export default function Footer({ history }){
    return (
        <div className="locais-container">
        <div className="list_of_places">
            <div className="individual_place">
                <h1>Nome do local</h1>
                <p>Descrição do local</p>
            </div>
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
