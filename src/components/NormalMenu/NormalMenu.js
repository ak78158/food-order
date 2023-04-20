import Accordion from "../Accordion/Accordion";
import NormalSingleCard from "../NormalSingleCard/NormalSingleCard";
import "./normalMenu.css";
const NormalMenu = ({ normalFoodMenu, handleOpenModal }) => {
  return (
    <div className="normalMenuContainer">
      {normalFoodMenu.map((normalMenuItems) => {
        const content = (
          <div className="NormalFoodCards">
            {normalMenuItems.items.map((foodItem) => {
              return (
                <NormalSingleCard
                  key={foodItem.id}
                  foodItem={foodItem}
                  handleOpenModal={handleOpenModal}
                />
              );
            })}
          </div>
        );
        return (
          <div className="specialFoodAccordion">
            <Accordion title={normalMenuItems.title} content={content} />
          </div>
        );
      })}
    </div>
  );
};

export default NormalMenu;
