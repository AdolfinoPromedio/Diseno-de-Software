import React from "react";
import Card_producto from "./card-cate";

import Card_cate from "./card-cate";

const cards = [
  {
    id: 1,
    title: "Fazt Web",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/250px-Korb_mit_Br%C3%B6tchen.JPG",
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Fazt Blog",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/250px-Korb_mit_Br%C3%B6tchen.JPG",
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/250px-Korb_mit_Br%C3%B6tchen.JPG",
    url: "https://youtube.com/fazttech",
  },
];

function Cards_productos() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, id }) => (
          <div className="col-md-4" key={id}>
            <Card_cate imageSource={image} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards_productos;
