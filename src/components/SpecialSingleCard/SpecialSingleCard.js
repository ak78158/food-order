import { useCallback } from "react";
import AddItemCounter from "../AddItemCounter/AddItemCounter";
import "./specialSingleCard.css";
import { useAppContext } from "../../hooks/useAppContext";

const SpecialSingleCard = ({ foodItem, handleOpenModal }) => {
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

  //   getCountValue(foodItem);

  return (
    <div className="specialCard">
      <div className="button">
        <img
          src={
            foodItem.imageURL ||
            "https://scan.toastapp.co/static/media/plate.3687c2d3.svg"
          }
          alt="food-item"
          className="foodImage"
          onClick={() => handleOpenModal(foodItem)}
        />
      </div>
      <div className="foodItemFooterBar">
        <div className="foodPriceBar">
          {foodItem.veg ? (
            <span className="veg"></span>
          ) : (
            <span className="nonveg"></span>
          )}
          {foodItem.name}
        </div>
        <div className="priceWithItemCounter">
          <div>₹{foodItem.price}</div>
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

export default SpecialSingleCard;
