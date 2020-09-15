import React, { useState, FormEvent, useEffect } from 'react';
import './Clientes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import { Button, Table, Card, Container, Row, Col } from 'react-bootstrap';
import api from '../../../services/api';

function Lista() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        searchClientes()
      }, []);

    function searchClientes(e) {
        if(e) {
            e.preventDefault();
        }

        const token = localStorage.getItem('token');

        const headers = {
            "Authorization" : "Bearer " + token
        };

        api.get('clientes', { headers }).then(res => {
            console.log('res.data ', res.data)
            setClientes(res.data);
        }).catch(err => {
            console.log('err * ', err)
        });
    }

  return (
    <div className="clientesContainer">
        <Card>
            <Card.Header>
                <Container>
                    <Row>
                        <Col sm="10">Clientes</Col>
                        <Col sm="2">
                            <Link to="/form-cliente" className="btn btn-primary">  
                                Adicionar Novo Cliente
                            </Link>
                         </Col>
                    </Row>
                </Container>
            </Card.Header>
        <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome/Razão Social</th>
                        <th>CPF/CPNJ</th>
                        <th>Tipo Pessoa</th>
                        <th>Telefones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { clientes.map((cliente) => {
                            return <tr>
                                    <td>{ cliente.id }</td>
                                    <td>{ cliente.nome  }</td>
                                    <td>{ cliente.cpf_cnpj }</td>
                                    <td>{ cliente.tipo_pessoa }</td>
                                    <td>(34) 99999-9999 / (34) 22222-88888</td>
                                </tr>
                        }) }
                    </tbody>
                </Table>
        </Card.Body>
        </Card>
    </div>);
}

export default Lista;
