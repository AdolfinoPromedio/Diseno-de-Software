import React from "react";
import CardComponentProducts from "../components/CardsComponent/CardsPageProduct/CardComponentProducts";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const cards = [
  {
    id: 1,
    title: "Nombre Producto",
    precio:9999,
    image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-4-1024x683.jpg",
  },
  {
    id: 2,
    title: "Nombre Producto",
   
    image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-4-1024x683.jpg",
  },
  {
    id: 3,
    title: "Nombre Producto",
    precio:9999,
    image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-4-1024x683.jpg",
  },
  {
    id: 4,
    title: "Nombre Producto",
    precio:9999,
    image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-4-1024x683.jpg",
  },
  {
    id: 5,
    title: "Nombre Producto",
    precio:9999,
    image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-4-1024x683.jpg",
  },

  {
    id: 6,
    title: "Nombre Producto",
    precio:9999,
    image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-4-1024x683.jpg",
  },
];

function Cards_productos_2() {
  return (
    <Row xs={2} md={1} className="g-4">
    {Array.from({ length: 1}).map((_, idx) => (
      <Col>
        <div>
          <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
              {cards.map(({ title, image, precio, id }) => (
                <div className="col-md-4" key={id}>
                  <CardComponentProducts imageSource={image} title={title} precio={precio} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Col>
    ))}
    </Row>
  );
}

export default Cards_productos_2;
