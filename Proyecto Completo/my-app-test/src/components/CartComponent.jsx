import { Drawer } from "@mui/material";
import { React, Component } from "react";

const items = [
    {
      id: 1,
      title: "Categoria Producto",
      price:1,
      image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-2-1024x681.jpg",
    },
    {
      id: 2,
      title: "Categoria Producto",
      price:2,
      image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-4-1024x683.jpg",
    },
    {
      id: 3,
      title: "Categoria Producto",
      price:3,
      image: "https://gastronomicainternacional.com/wp-content/uploads/2020/04/reposteria-2-1.jpg",
    }
  ];

class Cart extends Component {
    state = {
        isOpen: false
    };

    openCart = () => this.setState({ isOpen: true });
    closeCart = () => this.setState({ isOpen: false });

    render() {
        return (
            <Drawer anchor='right' PaperProps={{
                sx: {
                    width: 400,
                    borderRadius: 0
                }
            }}>
                <h1>My Cart</h1>
            </Drawer>
        );
    }
}

export default Cart;
