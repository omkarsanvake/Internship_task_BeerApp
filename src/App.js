import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerList from "./BeerList";
import SearchBar from "./SearchBar";
import "./App.js";
import "./index.css";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => {
        setBeers(response.data);
        setFilteredBeers(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (query) => {
    const filtered = beers.filter((beer) =>
      beer.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBeers(filtered);
  };

  return (
    <div className="app">
      <h1>Beer App</h1>
      <SearchBar handleSearch={handleSearch} />
      <BeerList beers={filteredBeers} />
    </div>
  );
};

export default App;

