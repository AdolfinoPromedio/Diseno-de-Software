import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Imagenes/EXT00002.png';
import img2 from '../Imagenes/EXT00016.png';
import img3 from '../Imagenes/EXT09845.png';
import React from 'react'
import '../styles/MyStyles.css'

export const CarouselComponent = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
          <div id='block_container'>
            <div class='carousel-text-style'>
              En el <div className='color_equalfont'>
              <div className='carousel-onlycolor'>Rincón</div> <div class='carousel-text-style2'>dulce<br/></div>
                </div> 
              Tenemos los mejores dulces de la ciudad.
            </div>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div id='block_container'>
              <div class='carousel-text-style'>
                En el <div className='color_equalfont'>
              <div className='carousel-onlycolor'>Rincón</div> <div class='carousel-text-style2'>dulce<br/></div>
                </div> 
                Ofrecemos un servicio de calidad para todos.
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div id='block_container'>
              <div class='carousel-text-style'>
                  En el <div className='color_equalfont'>
              <div className='carousel-onlycolor'>Rincón</div> <div class='carousel-text-style2'>dulce<br/></div>
                </div>  
                  Nos preocupamos de los pequeños detalles.
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    
  )
}

export default CarouselComponent;