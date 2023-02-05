import React from "react";
import Categories from "../Categories/Categories.jsx";
import DiskItem from "../DiskItem/DiskItem";
import style from "./Home.css";
import Sort from "../Sort/Sort";
import Slider from "../Slider/Slider.jsx";
import Skeleton from "../DiskItem/Skeleton.jsx";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext.js";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Search from "../Search/Search.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import { SearchContext } from "../../App.js";
import { useSelector } from "react-redux";

function Home() {
  const categoryId = useSelector((state) => state.filter.categoryId);

  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [diskDB, setDiskDB] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const onClickCategory = (id) => {
    console.log(id);
  };

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://62b6e7ae6999cce2e809e977.mockapi.io/items?page=${currentPage}&limit=8&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty.replace("-", "")}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setDiskDB(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div>
        <Slider />
      </div>

      <div className="bottom--header">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        <Sort sortType={sortType} onClickSort={(id) => setSortType(id)} />
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="disk-block__wrapper">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : diskDB.map((obj) => <DiskItem key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
}

export default Home;

// .filter((obj) => {
//                 if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
//                   return true;
//                 }

//                 return false;
//               })
