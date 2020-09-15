import React from 'react';
import './Clientes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';

import MaskedInput from 'react-maskedinput'


function FormCliente() {
  return (
    <div className="clientesContainer">
        <Card>
            <Card.Header>
                <Container>
                    <Row>
                        <Col sm="10">Clientes</Col>
                        <Col sm="2">
                            <Link to="/lista-clientes" className="btn btn-primary">  
                                Voltar
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Informe seu" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Tipo Pessoa</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option value="F">Física</option>
                                        <option value="J">Jurídica</option>
                                    </Form.Control>
                                </Form.Group>                        
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>CPF/CNPJ</Form.Label>
                                    <MaskedInput mask="111.111.111-11" className="form-control" name="card" size="20"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>                        
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>CEP</Form.Label>
                                    <MaskedInput mask="11.111-111" className="form-control" name="card" size="20"/>
                                </Form.Group>                        
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Classificação</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option value="Ativo">Ativo</option>
                                        <option value="Inativo">Inativo</option>
                                        <option value="Preferencial">Preferencial</option>
                                    </Form.Control>
                                </Form.Group>                        
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="10"></Col>
                            <Col xs="12" sm="2">
                                <Button variant="primary" className="btn-block">
                                    Salvar
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Card.Body>
        </Card>
    </div>);
}

export default FormCliente;
