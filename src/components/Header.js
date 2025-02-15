import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Header = () => {
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;
  console.log(currentPath);

  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Columbia</h1>
          </Link>
          {currentPath === "/" ? "" : (<div className="header__logout">
            <Link to="/">
              <button className="button button--link" >
                Logout
              </button>
            </Link>
          </div>)}
        </div>
      </div>
    </header>
  );
};

export default Header;
