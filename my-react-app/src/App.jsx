import { useState, useEffect } from "react";
import "./App.css";

import kingfisherImg from "./assets/kingfisher.jpeg";

function App() {
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);

  let sighting = [
    {
      code: "comkin1",
      name: "Common Kingfisher",
      image: kingfisherImg,
      location: "",
      timestamp: "",
      rarity: "",
    },
  ];

  return (
    <div className="app-container">
      <header>
        <h1>Nottinghamshire Birding Dashboard</h1>
        {/* 7. Check loading state: show "Loading..." or map over sightings */}
      </header>
      <main className="dashboard-content">
        <section className="widget-grid">
          {sighting.map((widget) => (
            <article key={widget.code} className="species-card">
              <h2>{widget.name}</h2>
              <div className="image-container">
                <img src={widget.image} alt={widget.name} />
              </div>

              <div className="sightings-feed">
                <p>SPOTTED AT ATTENBOROUGH 5 MINUTES AGO</p>
                {/* Your eBird API sightings list will go here later */}
              </div>
            </article>
          ))}
        </section>
        <aside className="sidebar">
          <div className="sidebar-card day-out-spot">
            <p>Based on data you should go HERE for BIRD1</p>
            <p>Based on data you should go HERE for BIRD2</p>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
