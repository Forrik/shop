import React from "react";
import style from "./Search.css";
import krestik from "../../img/krestik.png";
import { SearchContext } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className="search__wrapper">
      <svg
        className="search__icon"
        enableBackground="new 0 0 64 64"
        height="64px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 64 64"
        width="64px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle
            cx="32"
            cy="25"
            fill="none"
            r="16"
            stroke="#4D4D4D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            fill="none"
            stroke="#4D4D4D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            x1="40.9"
            x2="38.8"
            y1="44.1"
            y2="39.5"
          />
          <line
            fill="none"
            stroke="#4D4D4D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            x1="40.9"
            x2="46"
            y1="44.1"
            y2="55"
          />
          <path
            d="M36.2,13.7   c2.7,1,4.9,2.9,6.3,5.3"
            fill="none"
            stroke="#4D4D4D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
        </g>
      </svg>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="search__input"
        placeholder="Поиск диска"
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue("")}
          className="search__img"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="122.878px"
          height="122.88px"
          viewBox="0 0 122.878 122.88"
          enableBackground="new 0 0 122.878 122.88"
        >
          <g>
            <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
