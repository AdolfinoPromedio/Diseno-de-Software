import React from "react";
import Card from "./Card";



const cards = [
  {
    id: 1,
    title: "Categoria Producto",
    
    url: "https://gastronomicainternacional.com/wp-content/uploads/2020/05/tecnicas-de-reposteria-3-1024x576.jpg",
  },
  {
    id: 2,
    title: "Categoria Producto",
   
    url: "https://gastronomicainternacional.com/wp-content/uploads/2020/05/tecnicas-de-reposteria-2-1024x576.jpg",
  },
  {
    id: 3,
    title: "Categoria Producto",
    
    url: "https://youtube.com/fazttech",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title}  url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
