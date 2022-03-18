import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData); //The usestate for recipe data
  const RecipeDelete = (indexToDelete) => { //helps us to target specific recipes we want to delete with a filtered list
    const filteredList = recipes.filter(
      (recipe,index) => index !== indexToDelete
    )
    setRecipes(filteredList)
  }
  
  
  return ( // Returns the App header and the RecipeList and Recipe Create children
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} RecipeDelete={RecipeDelete}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}

export default App;