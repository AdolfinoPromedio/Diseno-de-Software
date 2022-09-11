import React from 'react'
import CardProduct from './CardProduct';
import testimg from '../Imagenes/testimg.jpg';

export const Products = () => {
  return (
    <div>
        <CardProduct imageSource={testimg} title='Pastel 1' text='Probando'/>
        <CardProduct imageSource={testimg} title='Pastel 2' text='Probando'/>
        <CardProduct imageSource={testimg} title='Pastel 3' text='Probando'/>
    </div>
  );
}

export default Products;