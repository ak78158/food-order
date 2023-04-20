import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <footer className="footer">
      <div className="footerItems">
        <Link to="/events" className="navLink">
          <div className="footerItem">⚡️</div>
        </Link>
        <Link to="/" className="navLink">
          <div className="footerItem">📖</div>
        </Link>
        <Link to="/place-order" className="navLink">
          <div className="footerItem">🛒</div>
        </Link>
      </div>
    </footer>
  );
};

export default FooterMenu;
