import { size } from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";
import style from "./Cart.css";

const CartItem = ({ id, name, type, price, count, imageUrl, size }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="cart__img" src={imageUrl} alt="" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          <b>Доставка: {type}</b>, <b>Размер {size}GB</b>
        </p>
      </div>
      <div className="cart__item-count">
        <div onClick={onClickPlus} className="cart__item-count__plus">
          +
        </div>
        <div className="cart__item-count__number">{count}</div>
        <div onClick={onClickMinus} className="cart__item-count__minus">
          -
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price * count}₽</b>
      </div>
      <div onClick={onClickRemove} className="cart__item-remove">
        x
      </div>
    </div>
  );
};

export default CartItem;
