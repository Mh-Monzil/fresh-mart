import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ProductCard from "../shared/ProductCard";

const PopularProduct = () => {
  const axiosPublic = useAxiosPublic();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data } = await axiosPublic.get("/products");
    setAllProducts(data);
  };

  const popularProducts = allProducts.sort(() => Math.random() - 0.5);

  return (
    <div className="mt-12 lg:mt-20">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center">Popular Products for Daily Shopping</h2>
      <p className="max-w-[680px] mx-auto font-normal lg:font-medium text-center mt-4">See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-4 lg:mt-8">
        {popularProducts.slice(0,12).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
