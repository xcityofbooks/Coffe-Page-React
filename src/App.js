import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import OurMenu from "./Components/Ourmenu";
import Map from "./Components/Map";
import "./App.css";
import { useState } from "react";

function App() {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const handleAddToCart = (item) => {
    const index = checkoutItems.findIndex(
      (product) => product.name === item.name
    );
    if (index !== -1) {
      const newCheckoutItems = [
        ...checkoutItems.slice(0, index),
        item,
        ...checkoutItems.slice(index + 1),
      ];
      setCheckoutItems(newCheckoutItems);
    } else {
      setCheckoutItems([...checkoutItems, item]);
    }
  };

  const handleDelete = (index) => {
    const newItems = [...checkoutItems];
    newItems.splice(index, 1);
    setCheckoutItems(newItems);
  };

  return (
    <div className="App">
      <Navbar
        checkoutItems={checkoutItems}
        handleDelete={handleDelete}
        setProductQuantity={(item) => setCheckoutItems(item)}
      />
      <Home />
      <AboutUs />
      <OurMenu addToCart={(item) => handleAddToCart(item)} />
    </div>
  );
}

export default App;
