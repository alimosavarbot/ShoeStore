// In the name of ALLAH!
// Mahdi Salehi

import { useState } from "react"
import invoiceIcon from "../../../assets/images/invoice.svg"
import locationIcon from "../../../assets/images/location.svg"
import shoppingCardIcon from "../../../assets/images/shopping-card.svg"
import shoeImg from "../../../assets/images/shoe.png"
import ShoppingCardItem, { boughtItemType } from "../ShoppingCardItem/ShoppingCardItem"

type currentStateType = "view" | "location" | "buy"


const defaultItems: boughtItemType[] = [
  {
    img: shoeImg,
    title: "کفش پیاده روی مدل 349",
    brand: "کفش نایک",
    price: "346/000",
    color: "#0f0",
    size: 42,
    total: 1,
    id: 1,
  },
  {
    img: shoeImg,
    title: "کفش پیاده روی مدل 349",
    brand: "کفش نایک",
    price: "346/000",
    color: "#f00",
    size: 42,
    total: 2,
    id: 2,
  },
  {
    img: shoeImg,
    title: "کفش پیاده روی مدل 349",
    brand: "کفش نایک",
    price: "346/000",
    color: "#00f",
    size: 42,
    total: 3,
    id: 3,
  },
  {
    img: shoeImg,
    title: "کفش پیاده روی مدل 349",
    brand: "کفش نایک",
    price: "346/000",
    color: "#ff0",
    size: 42,
    total: 4,
    id: 4,
  },
]


function ShoppingCard() {
  const [currentState, setCurrentState] = useState<currentStateType>("view")
  const [boughtItems, setBoughtItems] = useState<boughtItemType[]>(defaultItems)

  const removeItemHandler = (index: number) => {
    // Handle back-end


    // Handle front-end
    let newBoughtItems = boughtItems.slice()
    newBoughtItems.splice(index, 1)
    setBoughtItems(newBoughtItems)
  }

  return (
    <div>

      {/* Path */}
      <div className="mx-auto w-2/4">
        <div className="flex justify-center items-center mt-32">

          <div className="border border-slate-600 p-8 rounded-full relative"
          >
            <img
              src={shoppingCardIcon}
              alt="shopping-card-icon"
              className="min-w-14"
            />

            <span
              className="absolute w-full h-full top-0 left-0 rounded-full border-4 border-c-blue scale-[1.15]"
            />
          </div>

          <hr className="w-full ms-1 border-2 border-c-blue" />
          <hr className={`w-full border-slate-600 me-px
              ${(currentState === "location" || currentState === "buy") ? " border-2 border-c-blue me-1" : ""}
            `}
          />

          <div className={`border border-slate-600 p-8 rounded-full
              ${(currentState === "location") ? " border-4" : ""}`}
          >
            <img
              src={locationIcon}
              alt="location-icon"
              className="min-w-14"
            />

            {(currentState === "location" || currentState === "buy") &&
              <span
                className="absolute w-full h-full top-0 left-0 rounded-full border-4 border-c-blue scale-[1.15]"
              />
            }
          </div>

          <hr className={`w-full border-slate-600 ms-px
              ${(currentState === "location" || currentState === "buy") ? " border-2 border-c-blue ms-1" : ""}
            `}
          />
          <hr className={`w-full border-slate-600 me-px
              ${(currentState === "buy") ? " border-2 border-c-blue me-1" : ""}
            `}
          />

          <div className={`border border-slate-600 p-8 rounded-full
              ${(currentState === "buy") ? " border-4" : ""}`}
          >
            <img
              src={invoiceIcon}
              alt="invoice-icon"
              className="min-w-14"
            />

            {currentState === "buy" &&
              <span
                className="absolute w-full h-full top-0 left-0 rounded-full border-4 border-c-blue scale-[1.15]"
              />
            }
          </div>

        </div>
        <div className="flex justify-between items-center mb-28 mt-6 text-2xl">
          <span className="ms-3">سبد خرید</span>
          <span className="ms-12">اطلاعات ارسال</span>
          <span className="-me-2">اطلاعات پرداخت</span>
        </div>
      </div>

      {/* Products */}
      {/* <div className="w-5/6 mx-auto">
        <h6 className="text-2xl text-black">سبد خرید شما</h6>

        <div className="flex flex-col items-center">
            {
              boughtItems.map((item, index) => (
                <ShoppingCardItem item={item} removeItem={() => removeItemHandler(index)} key={item.id} />
              ))
            }
        </div>
      </div> */}

      {/* Buy State */}
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
              <span>560/000</span>
            </div>

            <div className="flex justify-between py-6 items-center text-[#F51212BF] border-b-2 border-[#00000040]">
              <span>تخفیف</span>
              <span>140/000</span>
            </div>

            <div className="flex justify-between my-6 items-center">
              <span className="text-nowrap">قیمت نهایی</span>
              <span>420/000</span>
            </div>
          </div>
        </div>

        <button className="bg-c-pink-80 w-fit rounded-md text-white py-2 px-20 mt-14 ms-auto">ثبت و مرحله بعد</button>
      </div>

    </div>
  )
}

export default ShoppingCard