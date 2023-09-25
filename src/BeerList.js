import React from "react";
import BeerCard from "./BeerCard";

const BeerList = ({ beers }) => {
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <BeerCard
          key={beer.id}
          name={beer.name}
          image={beer.image_url}
          tagline={beer.tagline}
        />
      ))}
    </div>
  );
};

export default BeerList;
