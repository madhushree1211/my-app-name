import React, { useState, useEffect } from "react";

const ArtifactGallery = () => {
  const [artifacts, setArtifacts] = useState([]);
  
  useEffect(() => {
    // Simulating fetching data from an API
    setTimeout(() => {
      setArtifacts([
        { id: 1, name: "Ancient Vase", origin: "Greece" },
        { id: 2, name: "Medieval Sword", origin: "Europe" },
        { id: 3, name: "Mayan Calendar", origin: "Central America" }
      ]);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Artifact Gallery</h2>
      <ul>
        {artifacts.map((artifact) => (
          <li key={artifact.id}>
            {artifact.name} - <strong>{artifact.origin}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtifactGallery;
