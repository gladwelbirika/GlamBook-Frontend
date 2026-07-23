import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-pink-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide hover:text-pink-100 transition"
        >
          GlamBook
        </Link>

        <Link
          to="/booking"
          className="bg-white text-pink-600 px-5 py-2 rounded-lg font-semibold hover:bg-pink-100 transition"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;