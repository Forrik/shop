import React from "react";
import style from "./DiskItem.css";
import disk from "../../img/disk.jpg";

const DiskItem = (props) => {
  const [count, setCount] = React.useState(0);
  const deliverNames = ["Экспресс", "Обычная"];
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  return (
    <div className="disk-block">
      <h4 className="disk-block__title">Диск {props.name}</h4>
      <div className="disk-block__wrapper__img">
        <img className="disk-block__img" src={props.imageUrl} alt="" />
      </div>

      <div className="disk-block__selector">
        <ul className="dick-block-ul">
          {props.deliver.map((deliver) => (
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
          {props.sizes.map((size, index) => (
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
        <div className="disk-block__price">от {props.price}₽</div>
        <div onClick={() => setCount(count + 1)} className="button">
          <span>+ Добавить </span>
          <i>{count}</i>
        </div>
      </div>
    </div>
  );
};

export default DiskItem;
