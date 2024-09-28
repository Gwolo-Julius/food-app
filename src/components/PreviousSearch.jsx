import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const PreviousSearch = () => {
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
    <div className="previour-search section">
      <h2>Previous Searches</h2>
      <div className="previour-search-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-items"
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input type="text" placeholder="search ..." />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default PreviousSearch;
