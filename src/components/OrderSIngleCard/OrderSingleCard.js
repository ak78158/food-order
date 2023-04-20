import { useCallback } from "react";
import AddItemCounter from "../AddItemCounter/AddItemCounter";
import "./orderSingleCard.css";
import { useAppContext } from "../../hooks/useAppContext";

const OrderSingleCard = ({ foodItem, DisableAddBtn }) => {
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
      <div className="foodNameWithPrice">
        <div className="priceWithCounter">
          <div className="foodPriceBar">
            {foodItem.veg ? (
              <span className="veg"></span>
            ) : (
              <span className="nonveg"></span>
            )}
            <div className="nameWithPrice">
              <div>{foodItem.name}</div>
              <div>{foodItem.price}</div>
            </div>
          </div>
          {!DisableAddBtn && (
            <AddItemCounter
              foodItem={foodItem}
              onAddClick={onAddClick}
              onSubtractClick={onSubtractClick}
              count={getCountValue(foodItem)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSingleCard;
