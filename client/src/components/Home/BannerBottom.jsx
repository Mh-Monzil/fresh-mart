const BannerBottom = () => {
  return (
    <div className="bg-[#FFEDD5] flex flex-col md:flex-row items-center justify-between gap-4 mt-8 py-4 px-6 md:px-10 rounded-md">
      <div>
        <h3 className="text-primaryGreen text-xl md:text-2xl font-bold">100% natural organic product</h3>
        <p>See Our latest discounted products from here and get a special discount product</p>
      </div>
      <div>
        <button className="w-fit text-white font-semibold bg-primaryGreen p-6 py-2 rounded-3xl">
          shop now
        </button>
      </div>
    </div>
  );
};

export default BannerBottom;
