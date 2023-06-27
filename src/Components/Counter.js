import React from "react";
import "../Style-sheets/Counter.css";

export default function Counter({ quantity, setQuantity }) {
  const addProduct = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const substracProduct = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.quantity);
    if (!isNaN(newValue) && newValue > 0 && newValue <= 20) {
      setQuantity(newValue);
    }
  };

  return (
    <>
      <div className="input-data hover-effect">
        <button className="btn-data" onClick={substracProduct}>
          -
        </button>
        <input
          className="counter-input"
          type="text"
          value={quantity}
          onChange={handleChange}
        />
        <button className="btn-data" onClick={addProduct}>
          +
        </button>
      </div>
    </>
  );
}
