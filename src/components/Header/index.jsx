import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./style.module.css";
import { store } from "../../Context/context";

function Header() {
  const { state, ChangeMode, ChangeLang } = useContext(store);
  console.log(state);
  return (
    <header className={style.header}>
      <div className="container">
        <div className="headerContainer">
          <Link to="/">LOGO</Link>
          <nav className="navlist">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <button className="darkmode" onClick={ChangeMode}>
            {state.darkmode ? "LightMode" : "DarkMode"}
          </button>
          <select
            className="lang"
            onChange={(e) => {
              ChangeLang(e.target.value);
            }}
            name=""
            id=""
          >
            <option value="uz">Uzb</option> <option value="ru">Rus</option>
            <option value="eng">Eng</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
