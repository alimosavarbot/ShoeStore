// In the name of ALLAH!
// Mahdi Salehi

import { useEffect, useState } from "react"
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
    price: 346000,
    discountPercent: 10,
    color: "#0f0",
    size: 42,
    total: 1,
    id: 1,
  },
  {
    img: shoeImg,
    title: "کفش پیاده روی مدل 349",
    brand: "کفش نایک",
    price: 346000,
    discountPercent: 10,
    color: "#f00",
    size: 42,
    total: 2,
    id: 2,
  },
  {
    img: shoeImg,
    title: "کفش پیاده روی مدل 349",
    brand: "کفش نایک",
    price: 346000,
    discountPercent: 10,
    color: "#00f",
    size: 42,
    total: 3,
    id: 3,
  },
  {
    img: shoeImg,
    title: "کفش پیاده روی مدل 349",
    brand: "کفش نایک",
    price: 346000,
    discountPercent: 10,
    color: "#ff0",
    size: 42,
    total: 4,
    id: 4,
  },
]


function ShoppingCard() {
  const [currentState, setCurrentState] = useState<currentStateType>("view")
  const [boughtItems, setBoughtItems] = useState<boughtItemType[]>(defaultItems)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [totalDiscount, setTotalDiscount] = useState<number>(0)


  const setItemsHandler = (id : number, newTotal: number) => {
    let index = boughtItems.findIndex((item : boughtItemType) => id === item.id)
    let changedItems = boughtItems.slice()

    if (newTotal <= 0) {
      changedItems.splice(index, 1)
      alert("محصول از سبد خرید شما حذف شد")
    } else {
      changedItems[index] = {...changedItems[index], total: newTotal}
    }
 
    setBoughtItems(changedItems)
  }

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


  useEffect(() => {
    let newTotalPrice = 0
    let newTotalDiscount = 0

    boughtItems.forEach(item => {
      newTotalPrice += item.price * item.total
      newTotalDiscount += item.price * item.total * 0.01 * (item.discountPercent || 100)
    })

    setTotalPrice(newTotalPrice)
    setTotalDiscount(newTotalDiscount)
  }, [boughtItems])

  return (
    <div>

      {/* Show States */}
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
          <hr className={`w-full 
              ${(currentState === "location" || currentState === "buy") ?
                "border-2 border-c-blue me-1" :
                "border-slate-600 me-px"
              }
            `}
          />

          <div className="border border-slate-600 p-8 rounded-full relative">
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

          <hr className={`w-full 
              ${(currentState === "location" || currentState === "buy") ?
                "border-2 border-c-blue ms-1" :
                "border-slate-600 me-px"
              }
            `}
          />
          <hr className={`w-full 
              ${(currentState === "buy") ?
                "border-2 border-c-blue me-1" :
                "border-slate-600 me-px"
              }
            `}
          />

          <div className="border border-slate-600 p-8 rounded-full relative">
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

      {/* Content */}
      <div className="w-5/6 mx-auto">
        {currentState === "view" &&
          <>
            <h6 className="text-2xl text-black">سبد خرید شما</h6>

            <div className="flex flex-col items-center">
                {
                  boughtItems.map((item) => (
                    <ShoppingCardItem
                      item={item}
                      key={item.id} 
                      setItemsHandler={setItemsHandler}
                    />
                  ))
                }
            </div>
          </>
        }
        {currentState === "location" &&
          <div className="flex flex-col justify-center">
            
          </div>
        }
        {currentState === "buy" &&
          <div className="flex items-center justify-center text-black font-black text-3xl my-10">
            <p className="px-8 py-3 bg-slate-300 rounded-md">صفحه پرداخت...</p>
          </div>
        }
      </div>

      {/* Buy Manager */}
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

    </div>
  )
}

export default ShoppingCard