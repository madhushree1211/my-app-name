import React, { useState, useEffect } from "react";

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storedVisits = localStorage.getItem("visitCount");
    if (storedVisits) {
      setVisits(parseInt(storedVisits));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("visitCount", visits);
  }, [visits]);

  return (
    <div>
      <h2>Visitor Counter</h2>
      <p>Number of visits: {visits}</p>
      <button onClick={() => setVisits(visits + 1)}>Increase Count</button>
    </div>
  );
};

export default VisitCounter;
