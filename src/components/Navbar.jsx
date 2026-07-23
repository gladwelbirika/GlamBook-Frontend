import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        GlamBook
      </Link>

      <Link to="/booking" className="book-button">
        Book Now
      </Link>
    </nav>
  );
}

export default Navbar;