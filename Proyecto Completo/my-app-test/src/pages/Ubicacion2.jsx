import React from 'react';
import Map from '../components/Map';

export const Ubicacion = () => {
  return (
    <div className='only_font2'>
      <br />
      <br />
      <br />
       <Map heading='Local La Florida' lat={-33.51498177942886} lng={-70.59950945936308} add='Froilan Roa #6703, La Florida, Santiago.' cel='+56983036518' mail='laflorida@elrincondulce.cl'/> 
    </div>
  )
}

export default Ubicacion;