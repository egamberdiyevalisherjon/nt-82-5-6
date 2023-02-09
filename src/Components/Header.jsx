import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  // const cart = useSelector((s) => s.cart);

  // console.log(cart);

  function handleLogout() {
    localStorage.removeItem("token");
    toast("Logged Out", { type: "info" });
    navigate("/login");
  }

  return (
    <header className="text-bg-primary shadow sticky-top py-3">
      <nav className="container d-flex  align-items-center justify-content-between fs-4">
        <Link className="text-reset text-decoration-none fs-1" to="/">
          Najot Market
        </Link>

        <ul className="list-unstyled d-flex align-items-center m-0 gap-3">
          <li>
            <Link className="btn btn-primary fs-4" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary fs-4" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary fs-4" to="/">
              Contact
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary fs-4" to="/cart">
              <i className="fa-solid fa-shopping-cart"></i>
              <span className="badge text-bg-danger ms-2">
                {/* {cart.items.length} */}0
              </span>
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="btn btn-primary fs-4">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
