import { useCallback } from "react";
import FooterButton from "../../components/FooterButton/FooterButton";
import FullScreenModal from "../../components/Modal/FullScreenModal";
import { useAppContext } from "../../hooks/useAppContext";

const FoodDetails = ({ isOpen, handleCloseModal }) => {
  const { addProduct } = useAppContext();
  const onAddClick = useCallback(
    (product) => {
      addProduct(product);
    },
    [addProduct]
  );
  return (
    <div className="modalContainer">
      <FullScreenModal isOpen={isOpen} onClose={handleCloseModal}>
        <div>
          <img
            src={
              isOpen.imageURL ||
              "https://scan.toastapp.co/static/media/plate.3687c2d3.svg"
            }
            alt="food-item"
            className="modalImage"
          />
          <div className="modalBody">
            <div className="foodPriceBar">
              {isOpen.veg ? (
                <span className="veg"></span>
              ) : (
                <span className="nonveg"></span>
              )}
              <h3>{isOpen.name}</h3>
            </div>
            {isOpen.foodType && <h5>{isOpen.foodType}</h5>}
            <span>{isOpen.description}</span>

            <div class="differentVarient">
              <h4>Select Variant</h4>

              {isOpen.variants.map((variantItem) => {
                return (
                  <div
                    class="radio"
                    key={`${variantItem.price}${variantItem.name}`}
                  >
                    <input type="radio" id="radio1" name="radio" />
                    <div className="radioItem">
                      <div>
                        <span className="icon"></span>
                        {variantItem.name}
                      </div>
                      <div>
                        <span className="variantPrice">
                          ₹{variantItem.price}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <FooterButton
          foodItem={isOpen}
          onClick={() => {
            onAddClick(isOpen);
            handleCloseModal();
          }}
        />
      </FullScreenModal>
    </div>
  );
};

export default FoodDetails;
