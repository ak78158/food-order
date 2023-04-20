import { useAppContext } from "../../hooks/useAppContext";
import Accordion from "../Accordion/Accordion";
import SpecialSingleCard from "../SpecialSingleCard/SpecialSingleCard";
import "./specialMenu.css";
const SpecialMenu = ({ handleOpenModal }) => {
  const { data } = useAppContext();

  const { specialFoodDelivery } = data;

  return (
    <div className="specialMenuContainer">
      <div class="banner">
        <img src="https://i.imgur.com/abF4sj3.jpg" alt="" />
        <div class="caption">
          <h3>Welcome to Sacred Earth</h3>
        </div>
      </div>
      {specialFoodDelivery.map((specialFoodMenu) => {
        const content = (
          <div className="foodItems">
            {specialFoodMenu.items.map((foodItem) => {
              return (
                <SpecialSingleCard
                  key={foodItem.id}
                  foodItem={foodItem}
                  handleOpenModal={handleOpenModal}
                />
              );
            })}
          </div>
        );
        return (
          <div>
            <div className="specialFoodAccordion">
              <Accordion title={specialFoodMenu?.title} content={content} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpecialMenu;
