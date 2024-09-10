// In the name of ALLAH!
// Mahdi Salehi

import { useState } from "react"
import invoiceIcon from "../../../assets/images/invoice.svg"
import locationIcon from "../../../assets/images/location.svg"
import shoppingCardIcon from "../../../assets/images/shopping-card.svg"


type currentStateType = "buy" | "location" | "send"

interface boughtItemType {
  
}


function ShoppingCard() {
  const [currentState, setCurrentState] = useState<currentStateType>("buy")
  const [boughtItems, setBoughtItems] = useState([])

  return (
    <div>

      {/* Path */}
      <div className="mx-auto w-2/4">
        <div className="flex justify-center items-center my-32">

          <div className={`border border-black p-8 rounded-full
              ${(currentState === "buy")? " border-4" : ""}`}
          >
            <img
              src={shoppingCardIcon}
              alt="shopping-card-icon"
              className="min-w-14"
            />
          </div>

          <hr className="w-full border-black mx-px" />

          <div className={`border border-black p-8 rounded-full
              ${(currentState === "location")? " border-4" : ""}`}
          >
            <img
              src={locationIcon}
              alt="location-icon"
              className="min-w-14"
            />
          </div>

          <hr className="w-full border-black mx-px" />

          <div className={`border border-black p-8 rounded-full
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
      <div>
        <h6>سبد خرید شما</h6>

        <div>

        </div>
      </div>
      
    </div>
  )
}

export default ShoppingCard