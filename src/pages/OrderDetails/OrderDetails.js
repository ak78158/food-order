import { useEffect, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import FooterButton from "../../components/FooterButton/FooterButton";
import OrderSingleCard from "../../components/OrderSIngleCard/OrderSingleCard";
import { useAppContext } from "../../hooks/useAppContext";
import "./orderDetails.css";
import { BackIcon } from "../../assets/SVGComponents/backIcon";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useAppContext();
  const [pastOrders, setPastOrders] = useState(null);
  const handle = () => {
    if (cart.length > 0) {
      localStorage.setItem("PastOrders", JSON.stringify(cart));
      setCart([]);
      navigate("/");
    }
  };

  useEffect(() => {
    var pastOrders = localStorage.getItem("PastOrders");
    const pastCartValue = JSON.parse(pastOrders);
    setPastOrders(pastCartValue);
  }, []);

  const content = (
    <div className="orderFoodCards">
      {cart?.map((foodItem) => {
        return <OrderSingleCard key={foodItem.id} foodItem={foodItem} />;
      })}
    </div>
  );

  const pastOrderContent = (
    <div className="orderFoodCards">
      {pastOrders?.map((foodItem) => {
        return (
          <OrderSingleCard
            key={foodItem.id}
            foodItem={foodItem}
            DisableAddBtn={true}
          />
        );
      })}
    </div>
  );

  return (
    <div className="modalContainer bgWhite pageContainer">
      <div>
        <div className="orderDetailsBack">
          <BackIcon
            className="backIcon orderDetailIcon"
            onClick={() => navigate(-1)}
          />
          <div className="placeOrder">Place Order</div>
        </div>
        <div className="orderDetailsContainer">
          <p>Items Getting Placed</p>
          <div className="specialFoodAccordion">
            <Accordion title={"Current Order"} content={content} />
          </div>

          <div className="specialFoodAccordion">
            <Accordion title={"Last Order"} content={pastOrderContent} />
          </div>
        </div>
      </div>

      <FooterButton
        buttonText="PLACE ORDER"
        totalItems={cart.length}
        onClick={() => handle()}
      />
    </div>
  );
};

export default OrderDetails;
