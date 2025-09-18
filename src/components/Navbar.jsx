import { Link } from "react-router-dom";
import { CircleUser, Contact, Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "../assets/img/rumahku-logo.png";

function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 left-0 z-50 w-full flex items-center gap-7 px-5 py-3 bg-primary">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Rumahku Logo" />
        </Link>

        {/* Search */}
        <div className="flex w-full max-w-[600px]">
          <input
            type="text"
            placeholder="Cari Produk..."
            className="w-full px-5 py-3 rounded-tl-full rounded-bl-full bg-white text-sm"
          />
          <button className="px-5 rounded-tr-full rounded-br-full bg-secondary text-white cursor-pointer hover:opacity-90">
            <Search />
          </button>
        </div>

        {/* Links */}
        <ul className="hidden md:flex flex-1 justify-center gap-24">
          <li>
            <Link className="nav-links-item">
              <Contact />
              <p>Kontak</p>
            </Link>
          </li>
          <li>
            <Link className="nav-links-item">
              <CircleUser />
              <p>Akun</p>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-links-item">
              <ShoppingCart />
              <p>Keranjang</p>
            </Link>
          </li>
        </ul>

        {/* Menu Button */}
        <button className="text-white cursor-pointer block md:hidden hover:opacity-90">
            <Menu />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
