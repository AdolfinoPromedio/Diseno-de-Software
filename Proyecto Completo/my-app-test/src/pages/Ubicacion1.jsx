import React from 'react';
import Map from '../components/Map';

export const Ubicacion = () => {
  return (
    <div className='only_font2'>
      <br />
      <br />
      <br />
       <Map heading='Local San Miguel' lat={-33.48498995386446} lng={-70.65490470174208} add='San Ignacio #3422, San Miguel, Santiago.' cel='+56936816250' mail='sanmiguel@elrincondulce.cl'/> 
    </div>
  )
}
export default Ubicacion;
