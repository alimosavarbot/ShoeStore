import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import shoe from "../../../assets/imgs/shoe.png";
import { CiShop } from "react-icons/ci";
import "./assets/sliderStyles.css";
import { FaTelegram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";

const Slider = () => {
  return (
    <div className="">
      {/* top section */}
      <div className="flex flex-col">
        {/* Circle and image */}
        <div className="flex flex-col items-center gap-2">
          <div className="absolute ">
            {/* stars */}
            <div className="relative -right-[12rem] sm:-right-[16rem]">
              <div className="four-pointed-star"></div>
            </div>

            <div className="relative -right-[14rem] sm:-right-[18rem] top-[3rem]">
              <div className="four-pointed-star"></div>
            </div>

            <img
              className="w-64 sm:w-96 relative top-[5rem] sm:top-[8rem] right-0 -rotate-[17deg]"
              src={shoe}
            />
          </div>

          <div className="flex gap-6">
            <div className="flex items-center justify-center w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] border-4 border-c-pink-80 rounded-full">
              <div className="flex items-center justify-center w-[17rem] h-[17rem] sm:w-[27rem] sm:h-[27rem] border-4 border-c-pink-80 rounded-full">
                <div className="flex items-center justify-center w-[14rem] h-[14rem] sm:w-[24rem] sm:h-[24rem] border-4 border-c-pink-80 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center">
              <div className=" h-[16rem] sm:h-[18rem] w-[3.2rem] sm:w-[3.5rem] rounded-2xl bg-c-blue-80">
                <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 py-2">
                  <span className="w-10 h-10 sm:w-10 sm:h-10 bg-white rounded-full">
                    <FaTelegram className="w-10 h-10 sm:w-10 sm:h-10 text-sky-700" />
                  </span>

                  <span className="bg-green-500 rounded-full ">
                    <BsWhatsapp className="w-10 h-10 sm:w-10 sm:h-10 text-white" />
                  </span>

                  <span className="w-10 h-10 sm:w-10 sm:h-10 bg-slate-800 rounded-full border border-white ">
                    <FaXTwitter className="w-9 h-9 sm:w-10 sm:h-10 text-white" />
                  </span>

                  <span className="flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 bg-red-500 rounded-full ">
                    <IoLogoYoutube className="w-9 h-9 sm:w-10 sm:h-10 text-white rounded-full" />
                  </span>

                  <span className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-600 to-pink-600 rounded-full ">
                    <FaInstagram className="w-10 h-10 sm:w-10 sm:h-10 text-white rounded-full" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col gap-5 mr-[10%] mb-5">
          <div className="flex flex-col gap-2">
            <span className="text-lg sm:text-2xl">قیمت:</span>
            <p className="text-sm sm:text-lg">348/000 تومان</p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-lg sm:text-2xl">مشخصات:</span>
            <p className="text-sm sm:text-lg">کفش السی واکی مدل 3492</p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-lg sm:text-2xl">توضیحات:</span>
            <p className="text-sm sm:text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
            </p>
          </div>

          <div className="flex gap-1 sm:gap-3 items-center justify-center btn btn-md text-white bg-c-pink-80 w-fit">
            <MdAddShoppingCart className="w-5 h-5 animate-bounce" />
            <p>افزودن به سبد خرید</p>
          </div>
        </div>
      </div>

      {/* slider section */}
      <div className="w-[90%] m-auto">
        <Swiper
          className="h-auto w-auto"
          modules={[Navigation]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide className="h-[20rem] ">
            <div className="flex justify-center !items-center h-full ">
              <div className="rounded-lg shadow-lg absolute bg-slate-100 ">
                <img
                  className="w-64 relative -top-6 right-0 -rotate-[17deg]"
                  src={shoe}
                />

                <div className="flex flex-col m-3 gap-2">
                  <p>کفش نایک مدل 3874</p>

                  <div className="flex gap-2">
                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="زرد"
                    >
                      <span className="dot dot-warning cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="سبز"
                    >
                      <span className="dot dot-success cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="آبی"
                    >
                      <span className="dot dot-primary cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="قرمز"
                    >
                      <span className="dot dot-error cursor-pointer"></span>
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <CiShop className="w-5 h-5" />

                    <p>479/000 تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-[20rem] ">
            <div className="flex justify-center !items-center h-full ">
              <div className="rounded-lg shadow-lg absolute bg-slate-100 ">
                <img
                  className="w-64 relative -top-6 right-0 -rotate-[17deg]"
                  src={shoe}
                />

                <div className="flex flex-col m-3 gap-2">
                  <p>کفش نایک مدل 3874</p>

                  <div className="flex gap-2">
                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="زرد"
                    >
                      <span className="dot dot-warning cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="سبز"
                    >
                      <span className="dot dot-success cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="آبی"
                    >
                      <span className="dot dot-primary cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="قرمز"
                    >
                      <span className="dot dot-error cursor-pointer"></span>
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <CiShop className="w-5 h-5" />

                    <p>479/000 تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-[20rem] ">
            <div className="flex justify-center !items-center h-full ">
              <div className="rounded-lg shadow-lg absolute bg-slate-100 ">
                <img
                  className="w-64 relative -top-6 right-0 -rotate-[17deg]"
                  src={shoe}
                />

                <div className="flex flex-col m-3 gap-2">
                  <p>کفش نایک مدل 3874</p>

                  <div className="flex gap-2">
                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="زرد"
                    >
                      <span className="dot dot-warning cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="سبز"
                    >
                      <span className="dot dot-success cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="آبی"
                    >
                      <span className="dot dot-primary cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="قرمز"
                    >
                      <span className="dot dot-error cursor-pointer"></span>
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <CiShop className="w-5 h-5" />

                    <p>479/000 تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-[20rem] ">
            <div className="flex justify-center !items-center h-full ">
              <div className="rounded-lg shadow-lg absolute bg-slate-100 ">
                <img
                  className="w-64 relative -top-6 right-0 -rotate-[17deg]"
                  src={shoe}
                />

                <div className="flex flex-col m-3 gap-2">
                  <p>کفش نایک مدل 3874</p>

                  <div className="flex gap-2">
                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="زرد"
                    >
                      <span className="dot dot-warning cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="سبز"
                    >
                      <span className="dot dot-success cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="آبی"
                    >
                      <span className="dot dot-primary cursor-pointer"></span>
                    </span>

                    <span
                      className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
                      data-tooltip="قرمز"
                    >
                      <span className="dot dot-error cursor-pointer"></span>
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <CiShop className="w-5 h-5" />

                    <p>479/000 تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
