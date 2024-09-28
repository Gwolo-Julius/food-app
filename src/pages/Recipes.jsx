import React from "react";

import PreviousSearch from "../components/PreviousSearch";
import RecipesCard from "../components/RecipesCard";

const Recipes = () => {
 
  return (
    <div>
      <PreviousSearch />
      <div className="recipes-container">
        <RecipesCard/>
        <RecipesCard/>
        <RecipesCard/>
        <RecipesCard/>
        <RecipesCard/>
        <RecipesCard/>
        <RecipesCard/>
        <RecipesCard/>
      </div>
    </div>
  );
};

export default Recipes;
