import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./DiskItem.css";
import disk from "../../img/disk.jpg";
import { addItem } from "../../redux/slices/cartSlice";
const deliverNames = ["Экспресс", "Обычная"];

const DiskItem = ({ name, imageUrl, deliver, sizes, price, id }) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      imageUrl,
      type: deliverNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <div className="disk-block">
      <h4 className="disk-block__title">Диск {name}</h4>
      <div className="disk-block__wrapper__img">
        <img className="disk-block__img" src={imageUrl} alt="" />
      </div>

      <div className="disk-block__selector">
        <ul className="dick-block-ul">
          {deliver.map((deliver) => (
            <li
              key={deliver}
              onClick={() => setActiveType(deliver)}
              className={activeType === deliver ? "disk-block-li active" : "disk-block-li"}
            >
              {deliverNames[deliver]}
            </li>
          ))}
          {/* <li className="disk-block-li active">экспресс</li>
          <li className="disk-block-li">обычная</li> */}
        </ul>
        <ul className="dick-block-ul">
          {sizes.map((size, index) => (
            <li
              key={size}
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? "disk-block-li active" : "disk-block-li"}
            >
              {size}GB
            </li>
          ))}
        </ul>
      </div>
      <div className="disk-block__bottom">
        <div className="disk-block__price">от {price}₽</div>
        <div onClick={onClickAdd} className="button">
          <span>+ Добавить </span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </div>
      </div>
    </div>
  );
};

export default DiskItem;
