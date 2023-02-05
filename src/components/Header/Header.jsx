import React from "react";
import style from "./Header.css";
import cartItem from "../../img/cartItem.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header--items">
        <Link to="/" className="header--logo">
          <svg
            fill="#000000"
            width="50px"
            height="50px"
            viewBox="0 0 36 36"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            className="header--svg"
          >
            <title>ssd-solid</title>
            <path
              d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM5.21,8A1.25,1.25,0,1,1,4,9.25,1.25,1.25,0,0,1,5.21,8Zm0,20a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,5.21,28Zm5.06-5.78a5,5,0,0,1-3.52-1.34l.86-1.06a4,4,0,0,0,2.71,1.11c1,0,1.55-.5,1.55-1.09s-.59-.91-1.91-1.22c-1.7-.4-2.89-.89-2.89-2.44s1.22-2.49,3-2.49a4.58,4.58,0,0,1,3.12,1.15l-.81,1.1A3.68,3.68,0,0,0,10,15a1.25,1.25,0,0,0-1.39,1.08c0,.67.61.91,1.92,1.21,1.72.39,2.87.94,2.87,2.44S12.24,22.22,10.27,22.22Zm7.51,0a5,5,0,0,1-3.52-1.34l.86-1.06a4,4,0,0,0,2.71,1.11c1,0,1.55-.5,1.55-1.09s-.59-.91-1.91-1.22c-1.7-.4-2.89-.89-2.89-2.44s1.23-2.49,3-2.49a4.56,4.56,0,0,1,3.12,1.15l-.81,1.1a3.68,3.68,0,0,0-2.37-1,1.25,1.25,0,0,0-1.39,1.08c0,.67.61.91,1.92,1.21,1.72.39,2.87.94,2.87,2.44S19.75,22.22,17.78,22.22Zm4.58-.14V13.84h2.9c2.72,0,4.64,1.71,4.64,4.12S28,22.08,25.26,22.08ZM30.69,28a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,30.69,28Zm0-17.5a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,30.69,10.5Z"
              className="clr-i-solid clr-i-solid-path-1"
            ></path>
            <path d="M23.86,15.2h1.56a2.77,2.77,0,1,1,0,5.53H23.86Z" className="clr-i-solid clr-i-solid-path-2"></path>
            <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
          </svg>
          <span className="logo">диски</span>
        </Link>

        <ul className="nav">
          <Link className="nav__link" to="/">
            <li className="nav__item">Главная</li>
          </Link>
          <Link className="nav__link" to="/about">
            <li className="nav__item">Про нас</li>
          </Link>
          <Link className="nav__link" to="/contacts">
            <li className="nav__item">Контакты</li>
          </Link>
          <Link className="nav__link" to="/smt">
            <li className="nav__item">Что-то</li>
          </Link>
        </ul>

        <div className="cart">
          <Link to="/cart" className="cart__button">
            <span className="cart__item">0₽</span>
            <div className="line"></div>
            <div className="cart__item">0 </div>
            <img className="cart__img" src={cartItem} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;