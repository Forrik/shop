import React from "react";
import qs from "qs";
import axios from "axios";
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
import { setCategoryId, setCurrentPage } from "../../redux/slices/filterSlice";
import { SearchContext } from "../../App.js";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const currentPage = useSelector((state) => state.filter.currentPage);

  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [diskDB, setDiskDB] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://62b6e7ae6999cce2e809e977.mockapi.io/items?page=${currentPage}&limit=8&${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortType.replace("-", "")}&order=${order}${search}`
      )
      .then((res) => {
        setDiskDB(res.data);
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
        <Sort />
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="disk-block__wrapper">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : diskDB.map((obj) => <DiskItem key={obj.id} {...obj} />)}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
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
