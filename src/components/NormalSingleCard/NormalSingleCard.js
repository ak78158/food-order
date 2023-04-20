import { useCallback, useState } from "react";
import AddItemCounter from "../AddItemCounter/AddItemCounter";
import "./normalSingleCard.css";
import { useAppContext } from "../../hooks/useAppContext";

const NormalSingleCard = ({ foodItem, handleOpenModal }) => {
  const { addProduct, getItemCount, subtractProduct } = useAppContext();

  const getCountValue = useCallback(
    (product) => {
      return getItemCount(product);
    },
    [getItemCount]
  );

  const onAddClick = useCallback(
    (product) => {
      addProduct(product);
    },
    [addProduct]
  );

  const onSubtractClick = useCallback(
    (product) => {
      subtractProduct(product);
    },
    [subtractProduct]
  );

  return (
    <div className="NormalMenu">
      <div>
        <img
          className="normalFoodIcon"
          src={
            foodItem.imageURL ||
            "https://scan.toastapp.co/static/media/plate.3687c2d3.svg"
          }
          alt="food-item"
          onClick={() => handleOpenModal(foodItem)}
        />
      </div>
      <div className="foodNameWithPrice">
        <div>{foodItem.name}</div>
        <div className="priceWithCounter">
          <div className="foodPriceBarWithButton">
            {foodItem.veg ? (
              <span className="veg"></span>
            ) : (
              <span className="nonveg"></span>
            )}
            {foodItem.price}
          </div>
          <AddItemCounter
            foodItem={foodItem}
            onAddClick={onAddClick}
            onSubtractClick={onSubtractClick}
            count={getCountValue(foodItem)}
          />
        </div>
      </div>
    </div>
  );
};

export default NormalSingleCard;
