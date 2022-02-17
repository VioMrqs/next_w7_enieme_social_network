import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Cookies from "js-cookie";
// import jwt_decode from "jwt-decode";

const Navbar = () => {
  const logInfo = useSelector((state) => state.connected);
  // const decodedToken = logInfo.connected ? jwt_decode(logInfo.token) : null;

  return (
    <div className="navbar">
      <div className="navbar-right">
        <ul>
          <Link to="/" className="navbar__button">
            ENIEME 🤐
          </Link>
        </ul>
      </div>
      <div className="navbar-left">
        {logInfo && <Link to="/profile">Profile</Link>}
          {logInfo && (
            <Link to="/logout" className="navbar__button">
              Déconnexion
            </Link>
          )}
          {!logInfo && (
              <Link to="/register" className="navbar__button">
                Inscription
              </Link>
          )}
          {!logInfo && (
            <Link to="/login" className="navbar__button">
              Connexion
            </Link>
          )}
      </div>
    </div>
  );
};

export default Navbar;
