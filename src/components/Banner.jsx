import { Link } from "react-router-dom";
import BannerImg from "../assets/img/banner-img.png";

function Banner() {
  return (
    <div
      className="flex flex-col gap-10 h-80 p-10 bg-black/50 bg-blend-overlay bg-cover bg-center rounded-md overflow-hidden"
      style={{ backgroundImage: `url("${BannerImg}")` }}
    >
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-white">
        Belanja Barang Favoritmu
      </h1>

      {/* Button */}
      <Link
        to="/products"
        className="w-fit px-5 py-3 bg-secondary text-white rounded-full text-sm hover:opacity-90 hover:underline"
      >
        Belanja
      </Link>
    </div>
  );
}

export default Banner;
