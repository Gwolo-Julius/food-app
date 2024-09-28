import React from 'react'
import CustomImages from './CustomImages'

const RecipesCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <CustomImages imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg} alt="" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <a className="recipe-btn" href="#!">
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
};

export default RecipesCard
