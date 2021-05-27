import React from 'react'
import { Container, Col, Row, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'
import Hat from '../static/images/rhat-square-nobg.png';

const Grid = () => {

  const data = [
    { id: "1", name:"Ribbon Hat #", address: "0x123456789" },
    { id: "2", name:"Ribbon Hat #", address: "0x987654321" },
    { id: "3", name:"Ribbon Hat #", address: "0x987654321" },
    { id: "4", name:"Ribbon Hat #", address: "0x123456789" },
    { id: "5", name:"Ribbon Hat #", address: "0x987654321" },
    { id: "6", name:"Ribbon Hat #", address: "0x987654321" },
    { id: "7", name:"Ribbon Hat #", address: "0x123456789" },
    { id: "8", name:"Ribbon Hat #", address: "0x123456789" },
    { id: "9", name:"Ribbon Hat #", address: "0x987654321" },
  ];

  const kek = () => {
    window.alert('kek');
  };

  return (
    <Container className="product-container container min-vh-100">
      <Row className="row h-100 justify-content-center align-items-center">
        {data.map(item => (
          <Col className="product-card">
            <Card>
              <CardImg top width="100%" src={Hat} alt="cap image" />
              <CardBody className="d-flex flex-column">
                <CardTitle className="d-flex justify-content-center" tag="h5">{item.name} - {item.id}</CardTitle>
                <Button onClick={kek}>Buy</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Grid;


