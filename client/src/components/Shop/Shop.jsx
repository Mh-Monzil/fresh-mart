import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ProductCard from "../shared/ProductCard";

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  const [allProducts, setAllProducts] = useState([]);
  const [currentPageProducts, setCurrentPageProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getCurrentPageProducts();
  }, [currentPage, itemsPerPage]);

  const getProducts = async () => {
    const { data } = await axiosPublic.get("/products");
    setAllProducts(data);
  };

  const numberOfPages = Math.ceil(allProducts.length / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const getCurrentPageProducts = async () => {
    const { data } = await axiosPublic.get(
      `/productsPerPage?page=${currentPage}&size=${itemsPerPage}`
    );
    setCurrentPageProducts(data);
  };
  console.log(currentPageProducts);

  const handlePrevChange = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextChange = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-6">FreshMart - Your One-Stop Grocery Shop</h1>
        <p className="max-w-[680px] mx-auto font-normal lg:font-medium text-center mt-4">Explore a wide range of fresh produce, pantry essentials, and daily groceries delivered right to your doorstep.</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-4 lg:mt-8">
        {currentPageProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="w-fit mx-auto flex items-center gap-4 mt-16">
        <span
          onClick={handlePrevChange}
          className="px-4 py-1.5 rounded-md bg-[#f1f1f1] cursor-pointer"
        >
          Prev
        </span>
        {pages.map((page, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(page + 1)}
            className={` px-4 py-1.5 rounded-md ${
              page + 1 === currentPage ? "bg-primaryGreen" : "bg-[#f1f1f1]"
            }`}
          >
            {page + 1}
          </button>
        ))}
        <span
          onClick={handleNextChange}
          className="px-4 py-1.5 rounded-md bg-[#f1f1f1] cursor-pointer"
        >
          Next
        </span>
      </div>
    </div>
  );
};

export default Shop;
