import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContent";
import logo1 from "../assets/logo1.jpg";

function Header() {
  const { cartItems } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <img
          src={logo1}
          alt="Logo"
          className="h-12 w-12 rounded-full"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg">
          <Link to="/">Home</Link>

          <Link to="/cart">
            Cart ({cartItems.length})
          </Link>

          <Link to="/order">Order</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart ({cartItems.length})
          </Link>

          <Link to="/order" onClick={() => setMenuOpen(false)}>
            Order
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;