import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Lista from './pages/clientes/lista-clientes/Lista';
import FormCliente from './pages/clientes/edicao-criacao-cliente/FormCliente';

function Routes () {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/lista-clientes" component={Lista} />
            <Route path="/form-cliente" component={FormCliente} />
        </BrowserRouter>
    );
}

export default Routes;