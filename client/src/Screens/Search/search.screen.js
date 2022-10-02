import React from "react";
import "./search.css";
import { Link, useNavigate } from "react-router-dom";
import { searchPageCategoryData } from "../../data/searchCategory";

export const SearchScreen = () => {
  const [searchPageCat, setSearchPageCat] = React.useState(
    searchPageCategoryData
  );
  const navigate = useNavigate();
  return (
    <div className="searchScreenMain">
      <div className="searchScreenMainHeader" onClick={() => navigate(-1)}>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>

      <div className="searchMain">
        <div className="searchArea">
          <div className="searchBox">
            <input type="text" placeholder="Search Butter Chicken" />
            <ion-icon name="search-outline"></ion-icon>
          </div>

          <div className="searchPageCategoryArea">
            <p>Popular Cuisines</p>

            <div className="allCat">
              {searchPageCat.map((category) => {
                return <img src={category.img} alt="" onClick={() => navigate(`/search?query=${category.name}`)} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
