import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';

function Login() {
  return (
      <div className="loginContainer">
        <div className="login">
            <h2>SportX - No caminho da vitória</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Informe seu email" maxLength="40" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Senha" type="password" maxLength="16" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Acessar
                </Button>
            </Form>
        </div>
      </div>
);
}

export default Login;
