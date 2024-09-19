import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import shoe from "../../../assets/imgs/shoe.png";
import { CiShop } from "react-icons/ci";

const Slider = () => {
  return (
    <div className="mb-8   ">
      {/* Desktop Section */}
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
            }
        
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

      {/* Mobile Section */}
      {/* <div className="flex items-center justify-between sm:hidden">
        Mobile Section
      </div> */}
    </div>
  );
};

export default Slider;

// <Swiper
// navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
// modules={[Navigation]}
// spaceBetween={3}
// breakpoints={{
//   320: {
//     slidesPerView: 2,
//     spaceBetween: 3,
//   },
//   640: {
//     slidesPerView: 3,
//     spaceBetween: 3,
//   },
//   768: {
//     slidesPerView: 4,
//     spaceBetween: 3,
//   },
//   1024: {
//     slidesPerView: 5,
//     spaceBetween: 6,
//   },
//   1320: {
//     slidesPerView: 6,
//     spaceBetween: 8,
//   },
// }}
// >
// {tabs?.map((item) => (
//   <SwiperSlide
//     key={item.id}
//     onClick={() => setTab(`tab${item.id}`)}
//     className={`text-center cursor-pointer ${
//       tab == `tab${item.id}`
//         ? "bg-blue-600 w-[100%] text-white"
//         : "text-blue-700"
//     }   w-[100%] py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 text-xs lg:text-base`}
//   >
//     <p
//       className={`text-xs lg:text-base  ${
//         tab == `tab${item.id}` ? "text-white" : "text-slate-800"
//       }`}
//     >
//       {item.title}
//     </p>
//   </SwiperSlide>
// ))}
// </Swiper>
