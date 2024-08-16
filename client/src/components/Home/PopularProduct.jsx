import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { LuShoppingCart } from "react-icons/lu";

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
          <div
            key={product._id}
            className="w-full rounded-md mx-auto bg-white shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-36 sm:w-40 mx-auto"
            />
            <div className="p-4 pt-0 ">
              <h4 className="font-medium capitalize">{product.name}</h4>
              <div className="flex justify-between items-center mt-3 lg:mt-2">
                <p className="text-xl font-semibold">${product.price}</p>
                <LuShoppingCart className="bg-primaryGreen text-white text-3xl lg:text-4xl border-2 p-1 border-primaryGreen rounded-md cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
