import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../Style-sheets/Modal.css";
import Counter from "./Counter";

export default function Modal({
  text,
  checkoutItems,
  handleDelete,
  setProductQuantity,
}) {
  const modifyProductQuantity = (quantity, name) => {
    const newProducts = checkoutItems.map((item) => {
      if (item.name === name) {
        item.quantity = quantity;
      }
      return item;
    });

    setProductQuantity(newProducts);
  };

  return (
    <div className="navbar-end">
      <label htmlFor="my-modal-3" className="btn">
        Checkout <AiOutlineShoppingCart className="icon-chkout" />
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-none">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Check your order</h3>
          <p className="py-4">Selected products</p>

          <div>
            {checkoutItems?.length ? (
              checkoutItems?.map((item, index) => {
                return (
                  <div className="checkout-container" key={index}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ height: 150, width: 150 }}
                    />
                    <div className="descriptions-container">
                      <div className="details-container">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <Counter
                          quantity={item.quantity}
                          setQuantity={(quantity) =>
                            modifyProductQuantity(quantity, item.name)
                          }
                        />

                        <button
                          className="btn-outline"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </div>

                      <div className="price-container">
                        <h1>Price</h1>
                        <h2>{item.price}</h2>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="checkout-text">
                {" "}
                {(text = "Your cart it's empty :(")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
