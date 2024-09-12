// In the name of ALLAH!
// Mahdi Salehi

import { useState } from "react"
import invoiceIcon from "../../../assets/images/invoice.svg"
import locationIcon from "../../../assets/images/location.svg"
import shoppingCardIcon from "../../../assets/images/shopping-card.svg"
import shoeImg from "../../../assets/images/shoe.png"
import ShoppingCardItem, { boughtItemType } from "../ShoppingCardItem/ShoppingCardItem"

type currentStateType = "buy" | "location" | "send"


const defaultItems : boughtItemType[] = [
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
  const [currentState, setCurrentState] = useState<currentStateType>("buy")
  const [boughtItems, setBoughtItems] = useState<boughtItemType[]>(defaultItems)

  const removeItemHandler = (index : number) => {
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
        <div className="flex justify-center items-center my-32">

          <div className={`border border-slate-600 p-8 rounded-full
              ${(currentState === "buy")? " border-4" : ""}`}
          >
            <img
              src={shoppingCardIcon}
              alt="shopping-card-icon"
              className="min-w-14"
            />
          </div>

          <hr className="w-full border-slate-600 mx-px" />

          <div className={`border border-slate-600 p-8 rounded-full
              ${(currentState === "location")? " border-4" : ""}`}
          >
            <img
              src={locationIcon}
              alt="location-icon"
              className="min-w-14"
            />
          </div>

          <hr className="w-full border-slate-600 mx-px" />

          <div className={`border border-slate-600 p-8 rounded-full
              ${(currentState === "send")? " border-4" : ""}`}
          >
            <img
              src={invoiceIcon}
              alt="invoice-icon"
              className="min-w-14"
            />
          </div>

        </div>
      </div>

      {/* Products */}
      <div className="w-5/6 mx-auto">
        <h6 className="text-2xl text-black">سبد خرید شما</h6>

        <div className="flex flex-col items-center">
            {
              boughtItems.map((item, index) => (
                <ShoppingCardItem item={item} removeItem={() => removeItemHandler(index)} key={item.id} />
              ))
            }
        </div>
      </div>
      
    </div>
  )
}

export default ShoppingCard