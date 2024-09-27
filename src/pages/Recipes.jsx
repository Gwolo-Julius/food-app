import React from "react";

const Recipes = () => {
  const searches = [
    "Cookies",
    "ice cream",
    "burger",
    "lasagna",
    "salad",
    "juice",
    "biriyani",
    "Pizza",
    "pudding",
    "soup",
  ];
  return (
    <div className="previour-search">
      <h2>Previours Searches</h2>
      <div className="previour-search-container">{searches.map(search=>(<div>{search}</div>))}</div>
      <h1>I'm Recipes page</h1>
    </div>
  );
};

export default Recipes;
