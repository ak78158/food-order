import { useEffect, useState } from "react";
import FullScreenModal from "../../components/Modal/FullScreenModal";
import { useAppContext } from "../../hooks/useAppContext";
import "./searchPage.css";
import NormalSingleCard from "../../components/NormalSingleCard/NormalSingleCard";
import { BackIcon } from "../../assets/SVGComponents/backIcon";
import { useNavigate } from "react-router-dom";
import FoodDetails from "../foodDetails/foodDetails";

const SearchPage = () => {
  const navigate = useNavigate();
  const { data } = useAppContext();
  const [isOpen, setIsOpen] = useState(null);
  const [searchText, setSearchText] = useState("");

  function handleOpenModal(foodMenuItem) {
    console.log("foodMenuItem", foodMenuItem);
    setIsOpen(foodMenuItem);
  }

  function handleCloseModal() {
    setIsOpen(null);
  }

  const itemValue = Object.values(data);
  const flatItemList = itemValue
    .flatMap((subArray) => {
      return subArray instanceof Array ? subArray : [subArray];
    })
    .map((item) => item.items)
    .flatMap((arr) => [...arr]);

  const filteredList = flatItemList.filter((x) => x.name.includes(searchText));

  return (
    <>
      <div className="modalContainer bgWhite">
        <div className="searchHeader">
          <div className="backIconContainer">
            <BackIcon className="backIcon" onClick={() => navigate(-1)} />
          </div>
          <div className="searchInput">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
        {filteredList.map((item) => {
          return (
            <NormalSingleCard
              key={item.id}
              foodItem={item}
              handleOpenModal={handleOpenModal}
            />
          );
        })}
      </div>
      {isOpen && (
        <FoodDetails isOpen={isOpen} handleCloseModal={handleCloseModal} />
      )}
    </>
  );
};

export default SearchPage;
