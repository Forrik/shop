import React from "react";
import style from "./Sort.css";

function Sort({ sortType, onClickSort }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const list = [
    { name: "популярности (возрастанию)", sortProperty: "-rating" },
    { name: "популярности (убыванию)", sortProperty: "rating" },
    { name: "цене (возрастанию)", sortProperty: "-price" },
    { name: "цене (убыванию)", sortProperty: "price" },
    { name: "алфавиту (возрастанию)", sortProperty: "title" },
    { name: "алфавиту (убыванию)", sortProperty: "-title" },
  ];
  const onClickListItem = (i) => {
    onClickSort(i);
    setIsVisible(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b className="sort__title">Сортировка по:&nbsp;</b>
        <span onClick={() => setIsVisible(!isVisible)} className="sort__span">
          {sortType.name}
        </span>
      </div>
      {isVisible && (
        <div className="sort__popup active">
          <ul className="sort__ul">
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sortType.sortProperty === obj.sortProperty ? "sort-li active" : "sort-li"}
              >
                {obj.name}
              </li>
            ))}
            {/* <li className="sort-li">алфавиту</li> */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
