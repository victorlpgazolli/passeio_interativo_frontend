import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Register'
import CadastrarLocal from './pages/CadastrarLocal'
import showQr from './pages/showQr'
import Local from './pages/Local'

export default function Routes(){
    return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/cadastrarLocal" exact component={CadastrarLocal} />
        <Route path="/main" exact component={Main} />
        <Route path="/showQr/:id" exact component={showQr} />
        <Route path="/local/:id" exact component={Local} />
    </BrowserRouter>
    );
}
