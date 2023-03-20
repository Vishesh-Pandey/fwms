import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/getStarted");
      })
      .catch((error) => {
        // An error happened.
        alert("Issue while logging out");
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Supermarket
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/supermarket"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/myproducts"
                >
                  My Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/addproduct"
                >
                  Add Product
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button
                onClick={handleLogout}
                className="btn btn-outline-warning"
                type="submit"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
