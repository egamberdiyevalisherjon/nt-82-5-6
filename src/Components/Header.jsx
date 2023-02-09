import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Header = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const navigate = useNavigate();

  function handleChangeLanguage() {
    changeLanguage(language === "uz" ? "en" : "uz");
  }

  const cart = useSelector((s) => s.cart);

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
              {t("HEADER_LINKS.HOME")}
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary fs-4" to="/">
              {t("HEADER_LINKS.ABOUT")}
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary fs-4" to="/">
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={handleChangeLanguage}
              className="btn btn-primary fs-4"
            >
              {language === "uz" ? "English" : "O'zbekcha"}
            </button>
          </li>
          <li>
            <Link className="btn btn-primary fs-4" to="/cart">
              <i className="fa-solid fa-shopping-cart"></i>
              <span className="badge text-bg-danger ms-2">
                {cart.items.length}
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
