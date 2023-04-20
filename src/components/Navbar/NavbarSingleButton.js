import "./navbarSingleButton.css";
const NavbarSingleButton = ({
  title,
  selected,
  onNavbarButtonClick,
  customStyle,
}) => {
  return (
    <div
      role="button"
      className={`navbarButton ${customStyle} ${selected && "selected"}`}
      onClick={() => onNavbarButtonClick(title)}
    >
      {title}
    </div>
  );
};

export default NavbarSingleButton;
