import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();


  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Columbia</h1>
          </Link>
          <Link to="/">
            <button className="button button--link" >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
