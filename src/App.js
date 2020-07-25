import React, { useEffect, useState } from "react";
import "./styles.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "34e9c25c";
  const APP_KEY = "0be321825945087fe51440cd1fe8037e";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      if (counter > 0) {
        const response = await fetch(exampleReq);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
      }
    };
    getRecipes();
  }, [counter]);

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </div>
      <div>
        {recipes.map((recipe, key) => (
          <Recipe props={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
