export default function Home() {
  return (
    <div>
      <header>
        <h1>Culture & Heritage</h1>
        <p>Discover the beauty of traditions and historical landmarks.</p>
      </header>

      <section className="gallery">
        <div className="card">
          <img src="https://i.pinimg.com/736x/b2/0b/f0/b20bf03fed8b5226a4759d64877282d2.jpg" alt="Festivals & Celebrations" />
          <h3>Festivals & Celebrations</h3>
          <p>A joyful celebration of colors and unity.</p>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/ea/f3/63/eaf3630df274e7b01afef0942d892355.jpg" alt="Traditional Attire" />
          <h3>Traditional Attire</h3>
          <p>Elegance in every thread of Indian culture.</p>
        </div>
      </section>
    </div>
  );
}

