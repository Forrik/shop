import React from "react";
import style from "./Sort.css";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const sortRef = React.useRef();

  const [isVisible, setIsVisible] = React.useState(false);
  const list = [
    { name: "популярности (возрастанию)", sortProperty: "-rating" },
    { name: "популярности (убыванию)", sortProperty: "rating" },
    { name: "цене (возрастанию)", sortProperty: "-price" },
    { name: "цене (убыванию)", sortProperty: "price" },
    { name: "алфавиту (возрастанию)", sortProperty: "title" },
    { name: "алфавиту (убыванию)", sortProperty: "-title" },
  ];
  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setIsVisible(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event.composedPath());
      let path = event.composedPath().includes(sortRef.current);
      if (!path) setIsVisible(false);
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b className="sort__title">Сортировка по:&nbsp;</b>
        <span onClick={() => setIsVisible(!isVisible)} className="sort__span">
          {sort.name}
        </span>
      </div>
      {isVisible && (
        <div className="sort__popup active">
          <ul className="sort__ul">
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? "sort-li active" : "sort-li"}
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
