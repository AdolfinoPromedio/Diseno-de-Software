import React from "react";
import CardComponentProducts from "../components/CardsComponent/CardsPageProduct/CardComponentProducts";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import products from '../API/data.json';
import Container from 'react-bootstrap/Container';

function Cards_productos_2() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div class="heading only_font2">
        <h1>Productos 2</h1>
      </div>
      <Container>
        <Row >
          {Array.from({ length: 1}).map((_, idx) => (
            <Col>
              <div>
                <div className="container d-flex justify-content-center align-items-center h-100">
                  <div className="row">
                    {products.map(({ nombreProducto, url, precio, id }) => (
                      <div className="col-md-4" key={id}>
                        <CardComponentProducts imageSource={url} title={nombreProducto} precio={precio} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cards_productos_2;
