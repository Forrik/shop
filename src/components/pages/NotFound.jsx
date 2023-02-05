import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.css";
import notFound from "../../img/notFound.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found__img" src={notFound} alt="" />
      <h1 className="not-found__title">Ничего не найдено</h1>
      <Link to="/" className="not-found__button">
        Вернуться назад
      </Link>
    </div>
  );
};

export default NotFound;
