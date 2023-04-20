import "./addItemCounter.css";
const AddItemCounter = ({ onAddClick, foodItem, count, onSubtractClick }) => {
  return (
    <div className="itemCounter">
      {count ? (
        <>
          <span
            className="counterIcon minusIcon"
            onClick={() => onSubtractClick(foodItem)}
          >
            -
          </span>
          {count}
          <span
            className="counterIcon plusIcon"
            onClick={() => onAddClick(foodItem)}
          >
            +
          </span>
        </>
      ) : (
        <>
          <span
            className="counterIcon plusIcon"
            onClick={() => onAddClick(foodItem)}
          >
            +
          </span>{" "}
          ADD
        </>
      )}
    </div>
  );
};

export default AddItemCounter;
