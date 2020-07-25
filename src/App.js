import React, { useEffect, useState } from "react";

import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "34e9c25c";
  const APP_KEY = "0be321825945087fe51440cd1fe8037e";
  const [recipes, setRecipes] = useState([]);
  const [search, updateSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      if (query !== "") {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
        console.log(search);
      }
    };
    getRecipes();
  }, [query]);

  const updateQuery = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={updateQuery}>
        <input
          type="text"
          className="search-bar"
          onChange={e => updateSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, key) => (
          <Recipe recipe={recipe} key={key} />
        ))}
      </div>
    </div>
  );
};

export default App;
