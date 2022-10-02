import "../Screens/Home/Home.styles.css";
import { Link, useNavigate } from "react-router-dom";

export const HeroArea = () => {
    const navigate = useNavigate();
  return (
    <div className="heroArea">
      <div className="overlay">
        <div className="header">
          <div className="logo">
            <Link className="logoLink" to="/">
              ModernMeals
            </Link>
          </div>
          <div className="menuItems">
            <Link className="link" to={"/add"}>
              Add resturant
            </Link>
            <p>Log in</p>
            <p>Sign up</p>
          </div>
        </div>
        <div className="cta">
          <h2>Modern Meals</h2>
          <p>Discover the best food & drinks in Pune</p>
          <div className="searchBar" onClick={() => navigate("/search")}>
            <ion-icon className="searchIcon" name="search-outline"></ion-icon>
            <p>Search for resturant, cuisine or a dish</p>
          </div>
        </div>
      </div>
    </div>
  );
};
