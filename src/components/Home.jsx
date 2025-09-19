import Banner from "./Banner";
import ProductCategories from "./ProductCategories";

function Home() {
  return (
    <main className="px-10 md:px-20 pt-32">
      <Banner />
      <ProductCategories />
    </main>
  );
}

export default Home;
