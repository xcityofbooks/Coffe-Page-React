import CoffeMug from "../Imagenes/coffee_mug.png";
import "../Style-sheets/AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="aboutus-container">
        <h1 className="menu-title">Our Story</h1>
        <h3 className="text-sub">Serving since 2014</h3>
        <div className="img-txt-container">
          <img className="img-mug" src={CoffeMug} alt="coffee-mug" />
          <div className="description-container">
            <h3 className="subtitle">We make coffee for real coffee lovers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              hendrerit sapien risus, et gravida sapien finibus in. Sed
              efficitur lectus a euismod posuere. Ut tristique accumsan nunc
              porttitor fermentum. Nulla nec tempus urna. Donec dignissim metus
              purus, a tristique quam facilisis a. Praesent pulvinar sapien
              enim, et pulvinar nulla consequat in. Nulla varius dui et turpis
              scelerisque aliquam. Suspendisse neque quam, rutrum at tempus a,
              viverra vitae turpis. Pellentesque tincidunt tortor ac est
              pulvinar, non condimentum mi efficitur. Curabitur iaculis massa ut
              nisl consectetur, vel posuere est feugiat. Integer eu mauris id
              diam interdum accumsan ut sed velit. Quisque at arcu eros.
              Phasellus euismod eu neque id pellentesque. Proin efficitur elit
              quis eleifend sodales. Aenean ac libero sed massa fringilla rutrum
              a in sem. Nunc maximus et turpis non feugiat. Vivamus sollicitudin
              quam eget imperdiet sagittis. Duis nisl ipsum, varius non tortor
              ac, rhoncus iaculis eros. Suspendisse potenti.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
