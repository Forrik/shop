import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Cart.css";
import CartItem from "./CartItem";
import { clearItems } from "../../redux/slices/cartSlice";
import CartEmpty from "./CartEmpty";
const Cart = () => {
  const dispatch = useDispatch();
  const onClickClearCart = () => {
    if (window.confirm("Вы уверены, что хотите очистить корзину товаров?")) {
      dispatch(clearItems());
    }
  };

  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__top">
          <div>
            <svg></svg>
            <h2 className="content__title">Корзина</h2>
          </div>
          <div>
            <svg></svg>
            <span onClick={onClickClearCart}>очистить карзину</span>
          </div>
        </div>
        <div className="cart__item">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__botom-details">
          <span>
            Всего дисков <b>{totalCount} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{totalPrice}₽</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
