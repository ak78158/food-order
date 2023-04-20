import React, { useState } from "react";
import { SearchIcon } from "../../assets/SVGComponents/searchIcon";
import NavbarSingleButton from "../../components/Navbar/NavbarSingleButton";
import "./home.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RoutesLinks from "../../Routes/RoutesLinks";
import { useAppContext } from "../../hooks/useAppContext";
import { SERVICE_TYPE } from "../../Context/Context";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import FoodDetails from "../foodDetails/foodDetails";

function Home() {
  const NAVBAR_LIST = [
    { title: "Special", id: 1, url: "/" },
    { title: "Food", id: 2, url: "/food" },
    { title: "Beverages", id: 3, url: "/beverages" },
    { title: "Desserts", id: 4, url: "/desserts" },
  ];

  const location = window.location.pathname;

  const currentTab = NAVBAR_LIST.find((tab) => tab.url === location);

  const [selectedNavbar, setSelectedNavbar] = useState(
    currentTab?.title || "Specials"
  );
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(null);
  function handleOpenModal(foodMenuItem) {
    setIsOpen(foodMenuItem);
  }
  function handleCloseModal() {
    setIsOpen(null);
  }
  const onNavbarButtonClick = (title) => {
    setSelectedNavbar(title);
  };
  const { changeServiceType, orderType } = useAppContext();

  return (
    <Router>
      <div className="container">
        <div className="header">
          <div className="iconWithOrderType">
            <div className="logoWithDropdown">
              <img
                src="https://toast-prod-data.s3.ap-south-1.amazonaws.com/restruant/52553522735652184/2020-06-20/sacred_earth_feature_image.jpeg"
                alt="logo"
                className="header__logo"
              />
              <div role="button" onClick={() => setDropdown(!dropdown)}>
                {orderType} 🔽
              </div>
              {dropdown && (
                <div className="dropdown">
                  <div
                    role="button"
                    className="dropdownList"
                    onClick={() => {
                      changeServiceType(SERVICE_TYPE.DELIVERY);
                      setDropdown(false);
                    }}
                  >
                    Delivery
                  </div>
                  <div
                    role="button"
                    className="dropdownList"
                    onClick={() => {
                      changeServiceType(SERVICE_TYPE.PICKUP);
                      setDropdown(false);
                    }}
                  >
                    PickUp
                  </div>
                </div>
              )}
            </div>
            <Link to="/search" className="navLink">
              <div className="navBar"></div>
              <SearchIcon />
            </Link>
          </div>
          <div className="navbarTabs">
            {NAVBAR_LIST.map((navItem) => {
              return (
                <Link to={`${navItem.url}`} className="navLink">
                  <NavbarSingleButton
                    selected={selectedNavbar === navItem.title}
                    title={navItem.title}
                    key={navItem.id}
                    onNavbarButtonClick={onNavbarButtonClick}
                    customStyle="navbarTabSingle"
                  />
                </Link>
              );
            })}
          </div>
        </div>
        {isOpen && (
          <FoodDetails isOpen={isOpen} handleCloseModal={handleCloseModal} />
        )}

        <FooterMenu />
        <RoutesLinks handleOpenModal={handleOpenModal} />
      </div>
    </Router>
  );
}

export default Home;
