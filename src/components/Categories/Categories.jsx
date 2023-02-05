import React from "react";
import style from "./Categories.css";

function Categories(props) {
  const categories = [
    "Все",
    "Kingston",
    "Samsung",
    "Intel",
    "Crucial",
    "Adata",
    "Goldenfir",
    "XrayDisk",
    "Kingspec",
    "Maxun",
    "Lexar",
  ];

  return (
    <div>
      <div className="categories">
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => props.onClickCategory(index)}
            className={props.categoryId === index ? "categories--item active" : "categories--item"}
          >
            {value}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Categories;
