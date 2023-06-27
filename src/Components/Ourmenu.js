import "../Style-sheets/OurMenu.css";
import Products from "../Components/Products";

export default function OurMenu({ addToCart }) {
  return (
    <div className="ourmenu-container">
      <h1 className="menu-title">Our Menu</h1>
      <h3 className="text-sub">You can try these products here</h3>
      <Products addToCart={(product) => addToCart(product)} />
    </div>
  );
}
