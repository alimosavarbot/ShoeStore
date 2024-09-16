// In the name of ALLAH!
// Mahdi Salehi

import { useState } from "react";
import { currentStateType } from "../ShoppingCard/ShoppingCard";


interface Props {
  currentState: currentStateType
  setCurrentState: Function
  totalPrice: number
  totalDiscount: number
}

function ShoppingCardBuyManager({ currentState, setCurrentState, totalPrice, totalDiscount } : Props) {

  const nextStep = () => {
    switch (currentState) {
      case "view":
        setCurrentState("location")
        break;
      case "location":
        setCurrentState("buy")
        break;
      default:
        setCurrentState("view")
        break;
    }
  }

  const prevStep = () => {
    switch (currentState) {
      case "buy":
        setCurrentState("location")
        break;
      default:
        setCurrentState("view")
        break;
    }
  }

  return (
    <div className="border-t-2 border-b-2 border-[#00000040] flex flex-col text-xl w-5/6 mx-auto px-8 pt-12 pb-36">
        <div className="bg-[#F1F1F1E5] flex px-4 py-8">
          <div className="text-black opacity-60 border-[#00000040] border-e-2 flex-1 p-6 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد
          </div>

          <div className="flex flex-col mx-14 w-1/4 font-bold">
            <div className="flex justify-between my-3 items-center">
              <span className="text-nowrap opacity-60">جمع کل سفارش</span>
              <span>{totalPrice.formatPrice()}</span>
            </div>

            <div className="flex justify-between py-6 items-center text-[#F51212BF] border-b-2 border-[#00000040]">
              <span>تخفیف</span>
              <span>{totalDiscount.formatPrice()}</span>
            </div>

            <div className="flex justify-between my-6 items-center">
              <span className="text-nowrap">قیمت نهایی</span>
              <span>{(totalPrice - totalDiscount).formatPrice()}</span>
            </div>
          </div>
        </div>

        <div className="mt-14 ms-auto">
          {currentState !== "view" &&
            <button
              className="bg-c-pink-80 w-fit rounded-md text-white py-2 px-20 me-10"
              onClick={prevStep}
            >مرحله قبل</button>
          }

          <button
            className="bg-c-pink-80 w-fit rounded-md text-white py-2 px-20"
            onClick={nextStep}
          >ثبت و مرحله بعد</button>
        </div>
      </div>
  )

}

export default ShoppingCardBuyManager