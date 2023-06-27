import "../Style-sheets/Home.css";

export default function Home() {
  return (
    <section className="home-section">
      <div className="text-container">
        <h1 className="title">
          <strong>Coffee time</strong> is a chance to slow down
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
          dignissim lorem, id feugiat purus euismod nec. In hac habitasse platea
          dictumst. Nam aliquet purus quis sem vehicula viverra.
        </p>

        <div className="btns-container">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-spl btn-org">
            Book a table
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-spl">
            About us
          </button>
        </div>
      </div>
    </section>
  );
}
