import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import shoe from "../../../assets/imgs/shoe.png";

const Slider = () => {
  return (
    <div className="mb-8 bg-slate-500 z-0 ">
      {/* Desktop Section */}
      <div className="hidden sm:flex   w-[80%] m-auto">
        <Swiper
          className=" !z-0 bg-blue-500 h-auto w-auto !relative"
          modules={[Navigation]}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
        >
          <div className="z-50 !absolute top-0 -right-10">
            <img className=" w-72 " src={shoe} />
          </div>

          <SwiperSlide className=" ">
            <div className="w-4/5 h-48 rounded-lg shadow-lg text-black bg-slate-200  z-40"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-56 h-48 rounded-lg shadow-lg text-black bg-slate-200">
              12
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-56 h-48 rounded-lg shadow-lg text-black bg-slate-200">
              13
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-56 h-48 rounded-lg shadow-lg text-black bg-slate-200">
              14
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Mobile Section */}
      <div className="flex items-center justify-between sm:hidden">
        Mobile Section
      </div>
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
