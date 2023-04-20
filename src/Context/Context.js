import React, { useEffect, useState } from "react";
import { SPECIAL_FOOD_DELIVERY_MENU } from "../data/specialFoodDelivery";
import { NORMAL_FOOD_DELIVERY_MENU } from "../data/normalFoodDelivery";
import { BEVERAGES_FOOD_DELIVERY_MENU } from "../data/beveragesMenuItems";
import { DESERT_FOOD_DELIVERY_MENU } from "../data/desertFoodDelivery";

export const ProductContext = React.createContext();

export const SERVICE_TYPE = {
  DELIVERY: "DELIVERY",
  PICKUP: "PICKUP",
};

export const ProductContextProvider = ({ children }) => {
  const [specialFoodDelivery, setSpecialFoodDelivery] = useState(
    SPECIAL_FOOD_DELIVERY_MENU
  );
  const [normalFoodDelivery, setNormalFoodDelivery] = useState(
    NORMAL_FOOD_DELIVERY_MENU
  );
  const [beveragesFoodDelivery, setBeveragesFoodDelivery] = useState(
    BEVERAGES_FOOD_DELIVERY_MENU
  );
  const [desertFoodDelivery, setDesertFoodDelivery] = useState(
    DESERT_FOOD_DELIVERY_MENU
  );
  const [orderType, setOrderType] = useState(SERVICE_TYPE.DELIVERY);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (orderType === SERVICE_TYPE.DELIVERY) {
      setSpecialFoodDelivery(SPECIAL_FOOD_DELIVERY_MENU);
      setNormalFoodDelivery(NORMAL_FOOD_DELIVERY_MENU);
      setBeveragesFoodDelivery(BEVERAGES_FOOD_DELIVERY_MENU);
      setDesertFoodDelivery(DESERT_FOOD_DELIVERY_MENU);
    } else {
      setSpecialFoodDelivery(NORMAL_FOOD_DELIVERY_MENU);
      setNormalFoodDelivery(BEVERAGES_FOOD_DELIVERY_MENU);
      setBeveragesFoodDelivery(DESERT_FOOD_DELIVERY_MENU);
      setDesertFoodDelivery(SPECIAL_FOOD_DELIVERY_MENU);
    }
  }, [orderType]);

  function search() {}

  function addProduct(product) {
    const productExist = cart.find((item) => {
      return item.id === product.id;
    });

    if (!productExist) {
      setCart((prevState) => [...prevState, { ...product, count: 1 }]);
    } else {
      setCart((prevState) => {
        const copy = [...prevState];
        const objIndex = copy.findIndex((obj) => obj.id === productExist.id);
        copy[objIndex].count = copy[objIndex].count + 1;

        return copy;
      });
    }
  }

  function subtractProduct(product) {
    setCart((prevState) => {
      const copy = [...prevState];
      const objIndex = copy.findIndex((obj) => obj.id === product.id);
      copy[objIndex].count = copy[objIndex].count - 1;
      if (copy[objIndex].count === 0) {
        copy.splice(objIndex, 1);
      }

      return copy;
    });
  }

  function changeServiceType(serviceType) {
    setOrderType(serviceType);
  }

  function getItemCount(product) {
    return cart.find((obj) => obj.id === product.id)?.count || 0;
  }

  return (
    <ProductContext.Provider
      value={{
        data: {
          specialFoodDelivery,
          normalFoodDelivery,
          beveragesFoodDelivery,
          desertFoodDelivery,
        },
        addProduct,
        subtractProduct,
        search,
        changeServiceType,
        getItemCount,
        orderType,
        cart,
        setCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
