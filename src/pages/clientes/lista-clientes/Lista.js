import React from 'react';
import './Clientes.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Table, Card } from 'react-bootstrap';

function Lista() {
  return (
    <div className="clientesContainer">
        <Card>
            <Card.Header>
                Clientes  
                <Button className="ml-3">Adicionar Novo Cliente</Button>
            </Card.Header>
        <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome do Cliente</th>
                        <th>CPF/CPNJ</th>
                        <th>Tipo Pessoa</th>
                        <th>Telefones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Juão Paulo</td>
                            <td>125.914.822-00</td>
                            <td>F</td>
                            <td>(34) 99999-9999 / (34) 22222-88888</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Juão Paulo</td>
                            <td>125.914.822-00</td>
                            <td>F</td>
                            <td>(34) 99999-9999 / (34) 22222-88888</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Juão Paulo</td>
                            <td>125.914.822-00</td>
                            <td>F</td>
                            <td>(34) 99999-9999 / (34) 22222-88888</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Juão Paulo</td>
                            <td>125.914.822-00</td>
                            <td>F</td>
                            <td>(34) 99999-9999 / (34) 22222-88888</td>
                        </tr>
                    </tbody>
                </Table>
        </Card.Body>
        </Card>
    </div>);
}

export default Lista;
