import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const logInfo = useSelector((state) => state.connected);

  return (
    <div className="navbar">
      <div className="navbar__right">
        <ul>
          <Link to="/">
            ENIEME 🤐
          </Link>
        </ul>
      </div>
      <div className="navbar__left">
        {logInfo && <Link to="/profile">Profile</Link>}
          {logInfo && (
            <Link to="/logout">
              Déconnexion
            </Link>
          )}
          {!logInfo && (
              <Link to="/register">
                Inscription
              </Link>
          )}
          {!logInfo && (
            <Link to="/login">
              Connexion
            </Link>
          )}
      </div>
    </div>
  );
};

export default Navbar;
