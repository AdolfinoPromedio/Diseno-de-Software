import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/EXT00002.png';
import img2 from '../images/EXT00016.png';
import img3 from '../images/EXT09845.png';
import React from 'react'
import './styles.css'

export const CarouselComponent = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
            <h3>En el Rincon Dulce</h3>
            <p>Tenemos los mejores dulces de la ciudad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
            <h3>En el Rincon Dulce</h3>
            <p>Ofrecemos un servicio de calidad para todos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
            <h3>En el Rincón Dulce</h3>
            <p>Nos preocupamos de los pequeños detalles.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent;