// In the name of ALLAH!
// Mahdi Salehi

import { currentStateType } from "../ShoppingCard/ShoppingCard"

import invoiceIcon from "../../../assets/images/invoice.svg"
import locationIcon from "../../../assets/images/location.svg"
import shoppingCardIcon from "../../../assets/images/shopping-card.svg"

interface Props {
  currentState: currentStateType
}

function ShoppingCardViewState({ currentState } : Props) {
  return (
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
              "border-slate-600 ms-px"
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
  )
}

export default ShoppingCardViewState