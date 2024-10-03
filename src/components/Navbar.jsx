import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { coso } from "../utils/coso";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { carrito, total } = useContext(CartContext);
  const { logout, token, setToken } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mía!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <button
              type="button"
              className="btn btn-dark border border-light m-1"
            >
              <FontAwesomeIcon icon={faPizzaSlice} /> <Link to="/"> Home</Link>
            </button>
            {token ? (
              <>
                <button
              type="button"
              className="btn btn-dark border border-light m-1"
            >
              <FontAwesomeIcon icon={faUser} />
              <Link to="/profile"> profile</Link>
            </button>
                <button
                  type="button"
                  className="btn btn-dark border border-light m-1" onClick={logout}
                >
                  <FontAwesomeIcon icon={faUnlock} /> Logout
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-dark border border-light m-1"
                >
                  <FontAwesomeIcon icon={faKey} />
                  <Link to="/login"> Login</Link>
                </button>
                <button
                  type="button"
                  className="btn btn-dark border border-light m-1"
                >
                  <FontAwesomeIcon icon={faKey} />{" "}
                  <Link to="/register">Register</Link>
                </button>
              </>
            )}
          </div>
          <div className="ms-auto">
            <button
              type="button"
              className="btn btn-dark border border-info text-info"
            >
              <FontAwesomeIcon icon={faCartShopping} />{" "}
              <Link to="/cart"> Total:${coso(total)} </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
