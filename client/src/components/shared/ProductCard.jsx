import { LuShoppingCart } from "react-icons/lu";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full rounded-md mx-auto bg-white shadow-md relative p-1">
      <span className="absolute left-1 top-1 text-[12px] p-1 bg-orange-200 rounded-md">
        In Stock: {product.stock}
      </span>
      <img
        src={product.image}
        alt={product.name}
        className="w-36 sm:w-40 mx-auto"
      />
      <div className="p-4 pt-0 ">
        <h4 className="font-medium capitalize">{product.name}</h4>
        <span className=" text-sm text-primaryGreen font-medium rounded-md">
          {product.category}
        </span>
        <div className="flex justify-between items-center mt-3 lg:mt-2">
          <p className="text-xl font-semibold">${product.price}</p>
          <LuShoppingCart className="bg-primaryGreen text-white text-3xl lg:text-4xl border-2 p-1 border-primaryGreen rounded-md cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
