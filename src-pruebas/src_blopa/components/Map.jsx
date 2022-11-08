import React from 'react';
import GoogleMaps from "simple-react-google-maps"
import '../styles/MyStyles.css'

export const Map = ({lat, lng, heading, add, cel, mail}) => {
  return (
        <div>
            <div class="heading" style={{ marginTop:'0px'}}>
                <h1>{heading}</h1>
            </div>
            <section class="map-about"> 
                <div className='map'>
                    <GoogleMaps 
                        apiKey='AIzaSyATIVFmHYk4iytxWnfwBFKGtvXbo98Hwks'
                        style={{ height:'25vw', width:'35vw'}}
                        zoom={17}
                        center={{
                            lat: lat,
                            lng: lng
                        }}
                        markers={[{lat: lat, lng: lng}]}
                    />
                </div>
                <div class="content">
                    <h3>Información</h3>
                    <li>
                        Dirección: {add}
                    </li>
                    <li>
                        Celular: {cel}
                    </li>
                    <li>
                        Mail: {mail}
                    </li>
                    <li>
                        Horario: 08:00 - 21:00 hrs.
                    </li>
                </div>
            </section>
        </div>

  )
}

export default Map;