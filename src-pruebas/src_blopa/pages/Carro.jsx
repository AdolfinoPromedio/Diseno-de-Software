import React from 'react'
import img1 from '../Imagenes/piedelimon.jpg';
import img2 from '../Imagenes/muffin.jpg';

export const Carro = () => {
  var username = localStorage.getItem("username").replace('"', '').replace('"', '');

  return (
    <div>
        <div className="heading">
            <h1>Carro de Compras</h1>
        </div>
        <body className="Cartbody">
            <div className="CartContainer">
                <div className="CartHeader">
                    <h3 className="CartHeading">Carro de Compras de: {username}</h3>
                    <h5 className="CartAction">Vaciar Carro</h5>
                </div>

                <div className="Cart-Items">
                    <div className="Cartimage-box">
                        <img src={img1}/>
                    </div>
                    <div className="Cartabout">
                        <h1 className="Carttitle">Pie de Limón</h1>
                        <h3 className="Cartsubtitle">Individual</h3>
                    </div>
                    <div className="Cartcounter">
                        <div className="Cartbtn">+</div>
                        <div className="Cartcount">1</div>
                        <div className="Cartbtn">-</div>
                    </div>
                    <div className="Cartprices">
                        <div className="Cartamount">$5.990</div>
                        <div className="Cartsave"><u>Añadir a Favoritos</u></div>
                        <div className="Cartremove"><u>Eliminar</u></div>
                    </div>
                </div>

                <div className="Cart-Items pad">
                    <div className="Cartimage-box">
                        <img src={img2}/>
                    </div>
                    <div className="Cartabout">
                        <h1 className="Carttitle">Muffin</h1>
                        <h3 className="Cartsubtitle">Chocolate</h3>
                    </div>
                    <div className="Cartcounter">
                        <div className="Cartbtn">+</div>
                        <div className="Cartcount">3</div>
                        <div className="Cartbtn">-</div>
                    </div>
                    <div className="Cartprices">
                        <div className="Cartamount">$6.990</div>
                        <div className="Cartsave"><u>Añadir a Favoritos</u></div>
                        <div className="Cartremove"><u>Eliminar</u></div>
                    </div>
                </div>
                <hr className='Carthr'/> 
                <div className="Cartcheckout">
                <div className="Carttotal">
                    <div>
                        <div className="CartSubtotal">Sub-Total</div>
                        <div className="Cartitems">4 Productos</div>
                    </div>
                    <div className="Carttotal-amount">$12.980</div>
                </div>
                <button className="Cartbutton">Pagar</button></div>
            </div>
        </body> 
    </div>
  )
}

export default Carro;