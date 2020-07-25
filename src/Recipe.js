import React, { useEffect, useState } from "react";
import "./App.css";

const Recipe = ({ recipe }) => {
  console.log({ recipe });
  const title = recipe.recipe.label;
  const calorie = recipe.recipe.calories;
  const image = recipe.recipe.image;
  const ingredients = recipe.recipe.ingredients;
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calorie}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
