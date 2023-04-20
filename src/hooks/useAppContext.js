import { useContext } from "react";
import ProductContext from "../Context/Context";

export const useAppContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw Error("wrap in App Context Provider");
  }

  return context;
};
