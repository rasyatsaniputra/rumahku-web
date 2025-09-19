import { Link } from "react-router-dom";
import useProductCategory from "./useProductCategory";

function ProductCategories() {
  const { productCategoryList } = useProductCategory();

  return (
    <section className="flex flex-col justify-center items-center gap-24 mt-12">
      <h2 className="text-xl font-bold">Kategori Produk</h2>
      <ul className="flex flex-wrap justify-center sm:justify-between gap-5 sm:gap-0 w-full">
        {productCategoryList.map((item) => (
          <li key={item.id}>
            <Link
              to="/cart"
              className="flex flex-col gap-7 w-full max-w-[140px] hover:underline"
            >
              <div className="w-full h-36">
                <img
                  src={item.img}
                  alt={`${item.title} Image`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-center text-sm font-medium">{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductCategories;
