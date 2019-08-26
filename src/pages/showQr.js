import React from 'react';
import './Login.css';
import ReactHtmlParser from "react-html-parser";
const qr = require('qr-image');


var qrcodes = []
export default function showQr({ history , match },) {
    async function getQr(){
        const { id } = match.params
        qrcodes.push(qr.imageSync( 'localhost:3000/local/'+id,  { type: 'svg' }))
        //qr_svg.pipe();
    }
    getQr()
  return (
    <div className="login-container">
       {
           qrcodes.map((qrcode) => <div key="1">{ReactHtmlParser(qrcode)}</div>)
       }

        <button onClick={() => history.push("/cadastrarLocal")} className="bottomButtons left">
                <h4>Cadastrar local</h4>
            </button>
            <button onClick={() => history.push("/main")} className="bottomButtons right">
                <h4>Ver locais</h4>
        </button>
    </div>
  );
}


