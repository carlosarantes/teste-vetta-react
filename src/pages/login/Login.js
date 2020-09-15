import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import api from '../../services/api';
import { BrowserRouter as Router } from 'react-router-dom'

function Login({ title, history }) {
  const token = localStorage.getItem('token');
  if (token) {
    history.push('/lista-clientes');
  }
    
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function auth() 
  {
    try {
       const res = await api.post('users/auth', { email, senha });
       if(res.data.token) {
          localStorage.setItem('token', res.data.token);
          history.push('/lista-clientes');
       } 
    } catch (e) {
        console.log('Ocorreu um erro ao realizar login... ', e);
    }
  }

  return (
      <div className="loginContainer">
        <div className="login">
            <h2>SportX - No caminho da vitória</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Informe seu email" 
                        maxLength="40"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        placeholder="Informe sua senha" 
                        type="password" 
                        value={senha}
                        maxLength="16"
                        onChange={(e) => {
                            setSenha(e.target.value);
                        }} />
                </Form.Group>
                <Button onClick={ auth } className="btn-block">
                    Acessar
                </Button>
            </Form>
        </div>
      </div>
);
}

export default Login;
