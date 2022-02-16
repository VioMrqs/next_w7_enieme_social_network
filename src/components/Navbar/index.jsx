import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const logInfo = useSelector((state) => state);

  if (logInfo.connected) {
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
          <ul>
            <Link to="/profile" className="navbar__button">
              Mon Profil
            </Link>
          </ul>
          <ul>
            <Link to="/logout" className="navbar__button">
              Déconnexion
            </Link>
          </ul>
        </div>
      </div>
    );
  }
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
        <ul>
          <Link to="/register" className="navbar__button">
            Inscription
          </Link>
        </ul>
        <ul>
          <Link to="/login" className="navbar__button">
            Connexion
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
