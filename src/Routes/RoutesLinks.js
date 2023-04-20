import { Routes, Route } from "react-router-dom";
import SpecialMenu from "../components/SpecialMenu/SpecialMenu";
import NormalMenu from "../components/NormalMenu/NormalMenu";
import { useAppContext } from "../hooks/useAppContext";
import OrderDetails from "../pages/OrderDetails/OrderDetails";
import SearchPage from "../pages/SearchPage/SearchPage";
import Events from "../pages/Events/Events";

const RoutesLinks = ({ handleOpenModal }) => {
  const { data } = useAppContext();

  const {
    specialFoodDelivery,
    normalFoodDelivery,
    beveragesFoodDelivery,
    desertFoodDelivery,
  } = data;
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div className="specialMenuFoodItems">
            <SpecialMenu
              foodMenu={specialFoodDelivery}
              handleOpenModal={handleOpenModal}
            />
          </div>
        }
      />
      <Route
        path="/Food"
        element={
          <NormalMenu
            normalFoodMenu={normalFoodDelivery}
            handleOpenModal={handleOpenModal}
          />
        }
      />
      <Route
        path="/Beverages"
        element={
          <NormalMenu
            normalFoodMenu={beveragesFoodDelivery}
            handleOpenModal={handleOpenModal}
          />
        }
      />
      <Route
        path="/Desserts"
        element={
          <NormalMenu
            normalFoodMenu={desertFoodDelivery}
            handleOpenModal={handleOpenModal}
          />
        }
      />
      <Route path="/events" element={<Events />} />
      <Route path="/place-order" element={<OrderDetails />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default RoutesLinks;
