import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Imagenes/EXT00002.png';
import img2 from '../Imagenes/EXT00016.png';
import img3 from '../Imagenes/EXT09845.png';
import '../components/styles/MyStyles.css'

export const CarrouselComponent = () => {
    return (
        <Carousel fade>

        <Carousel.Item>
          <img
            className="photo-carrousel" 
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className='carrousel-text'>
            <h2>En el Rincon Dulce</h2>
            <p>Tenemos los mejores dulces de la ciudad.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="photo-carrousel"
            src={img2}
            alt="Second slide"
          />
  
          <Carousel.Caption className='carrousel-text'>
            <h3>En el Rincon Dulce</h3>
            <p>Ofrecemos un servicio de calidad para todos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="photo-carrousel"
            src={img3}
            alt="Third slide"
          />
  
          <Carousel.Caption className='carrousel-text'>
            <h3>En el Rincón Dulce</h3>
            <p>
              Nos preocupamos de los pequeños detalles.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default CarrouselComponent;