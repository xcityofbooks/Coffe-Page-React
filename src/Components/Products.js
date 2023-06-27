import "../Style-sheets/Products.css";
import Counter from "../Components/Counter";
import CoffeeImg from "../Imagenes/black-coffee.png";
import { useState } from "react";

export default function Products({ addToCart }) {
  const coffeObj = [
    {
      name: "Black Coffee",
      description: "Made with best beans from Colombia",
      price: "$" + 2,
      image: CoffeeImg,
      quantity: 1,
    },
    {
      name: "Americano Coffee",
      description: "Made with best beans from Colombia",
      price: "$" + 4,
      image: CoffeeImg,
      quantity: 1,
    },
    {
      name: "Espresso Coffee",
      description: "Made with best beans from Colombia",
      price: "$" + 3,
      image: CoffeeImg,
      quantity: 1,
    },
  ];

  const [coffeeProducts, setcoffeeProducts] = useState(coffeObj);

  const setProductQuantity = (quantity, name) => {
    const newProducts = coffeeProducts.map((item) => {
      if (item.name === name) {
        item.quantity = quantity;
      }
      return item;
    });
    setcoffeeProducts(newProducts);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 grid-container">
      {coffeeProducts.map((product, index) => (
        <div
          key={index}
          className="card card-compact w-72 h-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img src={product.image} alt={product.name} />
          </figure>
          <div className="card-body">
            <div className="name-price">
              <h2 className="card-title">{product.name}</h2>
              <h3 className="card-title">{product.price}</h3>
            </div>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn" onClick={() => addToCart(product)}>
                Add to cart
              </button>
              <p className="name-qty">Qty.</p>
              <Counter
                quantity={product.quantity}
                setQuantity={(quantity) =>
                  setProductQuantity(quantity, product.name)
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
