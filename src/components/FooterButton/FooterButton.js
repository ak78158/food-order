const FooterButton = ({ foodItem, buttonText, totalItems, onClick }) => {
  return (
    <button className="addItem" onClick={onClick}>
      <span>
        {foodItem?.price ? `₹${foodItem?.price}` : `${totalItems}items`}
      </span>
      <span className="addTextIcon">
        <span>{buttonText || "ADD ITEMS"}</span>
        <div className="nextIcon">➡️</div>
      </span>
    </button>
  );
};

export default FooterButton;
