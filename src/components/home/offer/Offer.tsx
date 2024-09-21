import shoe from "../../../assets/imgs/shoe.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CiShop } from "react-icons/ci";
import "./assets/offer.css";
import { useEffect } from "react";

const Offer = () => {
  useEffect(() => {
    FillSpecifytext();
  }, []);

  function FillSpecifytext() {
    const AmazingOffer = " پیشنهاد شگفت انگیز ";
    const SpecialDiscounts = " تخفیفات ویژه ";
    const symbol = "<div class='inline animate-bounce px-2'> ✦ </div>";

    const innerText = AmazingOffer + symbol + SpecialDiscounts + symbol;
    const lineWidth =
      document.getElementById("offer-line-wrapper")?.offsetWidth;

    const countOfInnerText = ~~(lineWidth! / 120); //convert to int with ~~

    for (let index = 0; index < countOfInnerText; index++) {
      var firstLine = document.getElementById("first-line");
      firstLine!.innerHTML += innerText;

      var secondLine = document.getElementById("second-line");
      secondLine!.innerHTML += innerText;
    }
  }

  return (
    <div>
      {/* <span className="absolute -top-52 text-xs sm:text-lg" id="line-sample-text">پیشنهادات شگفت انگیز</span> */}
      {/*  mobile section */}
      <div className="sm:hidden border-y-2 border-dashed border-c-blue-80 py-4">
        <div className="flex justify-between border-2 border-c-pink-80 rounded-lg">
          <div className="flex flex-col items-center justify-center gap-2 bg-c-pink-80 h-auto px-5">
            <p className="text-white">پیشنهادات </p>
            <p className="text-white">شگفت </p>
            <p className="text-white">انگیز</p>
          </div>

          <div className="w-[75%] m-auto">
            <Swiper
              className=""
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
                  <div className="rounded-3xl shadow-lg absolute bg-slate-100 ">
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
                  <div className="rounded-3xl shadow-lg absolute bg-slate-100 ">
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
                  <div className="rounded-3xl shadow-lg absolute bg-slate-100 ">
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
                  <div className="rounded-3xl shadow-lg absolute bg-slate-100 ">
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
        <div className="flex justify-end mt-3 ">
          <div className="btn btn-md bg-c-pink-80 text-white rounded-3xl">
            مشاهده محصولات بیشتر
          </div>
        </div>
      </div>

      {/* desktop Section */}
      <div className="hidden sm:block mt-16 mb-52 ">
        <div id="offer-line-wrapper">
          <div
            id="first-line"
            className="line-1 flex items-center px-3 text-white text-nowrap overflow-hidden"
          ></div>
          <div
            id="second-line"
            className="line-2 flex items-center px-3 text-white text-nowrap overflow-hidden"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
