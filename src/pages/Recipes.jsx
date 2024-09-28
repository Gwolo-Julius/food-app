import React from "react";

import PreviousSearch from "../components/PreviousSearch";
import RecipesCard from "../components/RecipesCard";

const Recipes = () => {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
  ].sort(()=>Math.random()-0.5);
  return (
    <div>
      <PreviousSearch />
      <div className="recipes-container">
        {recipes.map((recipe, index)=>(

        <RecipesCard key={index} recipe={recipe}/>
        ))}
       
      </div>
    </div>
  );
};

export default Recipes;
