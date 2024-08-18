import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ProductCard from "../shared/ProductCard";

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  const [allProducts, setAllProducts] = useState([]);
  const [currentPageProducts, setCurrentPageProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const itemsPerPage = 8;
  const products =
    filteredProducts.length >= 1 ? filteredProducts : currentPageProducts;

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

  const onSearch = async (e) => {
    e.preventDefault();
    const searchValue = e.target.searchValue.value;
    console.log(searchValue);

    try {
      const { data } = await axiosPublic.get(
        `/searchedProducts/${searchValue}`
      );
      console.log(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChange = async (e) => {
    e.preventDefault();
    const searchCategory = e.target.value;

    try {
      const { data } = await axiosPublic.get(
        `/searchedCategory/${searchCategory}`
      );
      console.log(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onPriceChange = async (e) => {
    console.log(e.target.value);
    const priceCharge = parseInt(e.target.value);
    console.log(priceCharge);
    let minValue = 0;
    let maxValue = 0;
    if (priceCharge === 50) {
      minValue = 0;
      maxValue = 50;
    } else if (priceCharge === 100) {
      minValue = 50;
      maxValue = 100;
    } else if (priceCharge === 200) {
      minValue = 100;
      maxValue = 200;
    } else if (priceCharge > 200) {
      minValue = 200;
      maxValue = 500;
    }

    try {
      const { data } = await axiosPublic.get(
        `/products/priceRange?minValue=${minValue}&maxValue=${maxValue}`
      );
      console.log(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-6">
        FreshMart - Your One-Stop Grocery Shop
      </h1>
      <p className="max-w-[680px] mx-auto font-normal lg:font-medium text-center mt-4">
        Explore a wide range of fresh produce, pantry essentials, and daily
        groceries delivered right to your doorstep.
      </p>

      {/* search  */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <form onSubmit={onSearch} className="flex items-center gap-2 my-10">
          <input
            type="text"
            name="searchValue"
            placeholder="Type here"
            className="input border p-2 w-full max-w-xs rounded-md "
          />
          <button
            type="submit"
            className="w-fit text-white font-semibold bg-primaryGreen p-6 py-2 rounded-md"
          >
            Search
          </button>
        </form>

        <div className="flex gap-3">
          <select onChange={onPriceChange} className="border p-1 rounded-sm">
            <option value="">Price Range</option>
            <option value="50">0 - 50</option>
            <option value="100">50 - 100</option>
            <option value="200">100 - 200</option>
            <option value="201">200+</option>
          </select>

          {/* select form  */}
          <select onChange={onChange} className="border p-1 rounded-sm">
            <option value="">Category</option>
            <option value="fresh-vegetable">Fresh Vegetable</option>
            <option value="fresh-fruits">Fresh Fruits</option>
            <option value="dry-fruits">Dry Fruits</option>
            <option value="butter-ghee">Butter Ghee</option>
            <option value="juice">Juice</option>
            <option value="cake">Cake</option>
            <option value="ice-cream">Ice Cream</option>
            <option value="Coffee">Coffee</option>
            <option value="energy-drink">Energy Drink</option>
            <option value="cereal">cereal</option>
            <option value="cooking-essentials">Cooking Essentials</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-4 lg:mt-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="w-fit mx-auto flex items-center mt-16">
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
            className={` px-4 py-1.5 ${
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
