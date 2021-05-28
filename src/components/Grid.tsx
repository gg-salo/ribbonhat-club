import React, { useState } from 'react'
import { Container, Col, Row, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'
import Hat from '../static/images/rhat-square-nobg.png';
import "../static/css/Experiments.css";
import { Link } from "react-router-dom";

const Grid = () => {

  const [data] = useState([
    { id: "1", name:"Ribbon Hat #", address: "0x123456789", link: "/hat/1" },
    { id: "2", name:"Ribbon Hat #", address: "0x987654321", link: "/hat/2" },
    { id: "3", name:"Ribbon Hat #", address: "0x987654321", link: "/hat/3" },
    { id: "4", name:"Ribbon Hat #", address: "0x123456789", link: "/hat/4" },
    { id: "5", name:"Ribbon Hat #", address: "0x987654321", link: "/hat/5" },
    { id: "6", name:"Ribbon Hat #", address: "0x987654321", link: "/hat/6" },
    { id: "7", name:"Ribbon Hat #", address: "0x123456789", link: "/hat/7" },
    { id: "8", name:"Ribbon Hat #", address: "0x123456789", link: "/hat/8" },
    { id: "9", name:"Ribbon Hat #", address: "0x987654321", link: "/hat/9" },
  ]);

  return (
    <Container className="product-container container min-vh-100">
      <Row className="row h-100 justify-content-center align-items-center">
        {data.map(item => (
          <Col className="product-card">
            <Link to={item.link} className="product-link">
              <Card>
                <CardImg top width="100%" src={Hat} alt="cap image"/>
                <CardBody className="d-flex flex-column">
                  <CardTitle className="d-flex justify-content-center" tag="h5">{item.name} - {item.id}</CardTitle>
                  <Button>View</Button>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Grid;


