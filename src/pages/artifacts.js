import React from "react";
import ArtifactGallery from "../components/ArtifactGallery";
import VisitCounter from "../components/VisitCounter";

const ArtifactsPage = () => {
  return (
    <div>
      <h1>Welcome to the Artifact Collection</h1>
      <VisitCounter />
      <ArtifactGallery />
    </div>
  );
};

export default ArtifactsPage;
