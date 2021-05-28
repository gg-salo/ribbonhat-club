import { Link } from "react-router-dom";
import React from "react";
import { Card, Col, Container, Row, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import Hat from '../static/images/rhat-square-nobg.png';

const ProductDetail = () => {

  const kek = () => {
    window.alert('kek');
  };

  return (
    <Container className="product-detail-container container min-vh-100">
      <Card>
        <Row className="row">
          <Col className="product-img col-6">
            <Card>
              <CardImg top width="50%" src={Hat} alt="cap image"/>
            </Card>
          </Col>
          <Col className="product-info col-6">
            <Card>
              <CardBody className="d-flex flex-column">
                <CardTitle className="d-flex justify-content-center" tag="h5"></CardTitle>
                <Button onClick={kek}>Buy</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Card>
      <Container>
        <Row className="float-right">
          <Link to="/" className="btn btn-secondary">Back</Link>
        </Row>
      </Container>
    </Container>
  )
}

export default ProductDetail;
