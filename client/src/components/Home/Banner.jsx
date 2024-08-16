import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Banner = () => {

  return (
    <div className="col-span-5 h-[400px] md:h-[500px] ">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper h-full"
      >
        {/* slide 1  */}
        <SwiperSlide
          style={{ backgroundImage: `url(${banner1})` }}
          className="w-full h-full bg-no-repeat bg-cover bg-center lg:bg-right-bottom rounded-md"
        >
          <div className="md:w-[45%] h-full pl-4 md:pl-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold">Fresh Groceries, Delivered to Your Doorstep</h1>
            <p className="font-normal md:font-medium mt-4">
              Discover the freshest produce, meats, and daily essentials. Shop
              online with ease and enjoy same-day delivery right to your home.
            </p>
            <button className="w-fit text-white font-semibold mt-6 bg-primaryGreen p-6 py-3 rounded-md">shop now</button>
          </div>
        </SwiperSlide>

        {/* slide 2  */}
        <SwiperSlide
          style={{ backgroundImage: `url(${banner2})` }}
          className="w-full h-full bg-no-repeat bg-cover bg-right-bottom "
        >
          <div className="md:w-[45%] h-full pl-4 md:pl-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold">Shop Smart, Eat Fresh</h1>
            <p className="font-normal md:font-medium mt-4">
            Stock up on all your kitchen staples with unbeatable prices. From organic veggies to pantry favorites, we have everything you need for a healthy lifestyle.
            </p>
            <button className="w-fit text-white font-semibold mt-6 bg-primaryGreen p-6 py-3 rounded-md">shop now</button>
          </div>
        </SwiperSlide>

        {/* slide 3  */}
        <SwiperSlide
          style={{ backgroundImage: `url(${banner3})` }}
          className="w-full h-full bg-no-repeat bg-cover bg-right-bottom"
        >
          <div className="md:w-[45%] h-full pl-4 md:pl-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold">Your Grocery Store, Anytime, Anywhere</h1>
            <p className="font-normal md:font-medium mt-4">
            Skip the lines and shop from the comfort of your home. Explore a wide range of groceries and enjoy fast, hassle-free delivery at your convenience.
            </p>
            <button className="w-fit text-white font-semibold mt-6 bg-primaryGreen p-6 py-3 rounded-md">shop now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
