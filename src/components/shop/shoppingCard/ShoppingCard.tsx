// In the name of ALLAH!
// Mahdi Salehi

import { useEffect, useState } from "react";
import ShoppingCardProduct, {
  boughtItemType,
} from "../ShoppingCardProduct/ShoppingCardProduct";

import shoeImg from "../../../assets/images/shoe.png";
import ShoppingCardViewState from "../ShoppingCardViewState/ShoppingCardViewState";
import ShoppingCardBuyManager from "../ShoppingCardBuyManager/ShoppingCardBuyManager";
import ShoppingCardLocationState from "../ShoppingCardLocationState/ShoppingCardLocationState";

export type currentStateType = "view" | "location" | "buy";

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
];

function ShoppingCard() {
  const [currentState, setCurrentState] =
    useState<currentStateType>("location");
  const [boughtItems, setBoughtItems] =
    useState<boughtItemType[]>(defaultItems);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalDiscount, setTotalDiscount] = useState<number>(0);

  const setItemsHandler = (id: number, newTotal: number) => {
    let index = boughtItems.findIndex((item: boughtItemType) => id === item.id);
    let changedItems = boughtItems.slice();

    if (newTotal <= 0) {
      changedItems.splice(index, 1);
      alert("محصول از سبد خرید شما حذف شد");
    } else {
      changedItems[index] = { ...changedItems[index], total: newTotal };
    }

    setBoughtItems(changedItems);
  };

  useEffect(() => {
    let newTotalPrice = 0;
    let newTotalDiscount = 0;

    boughtItems.forEach((item) => {
      newTotalPrice += item.price * item.total;
      newTotalDiscount +=
        item.price * item.total * 0.01 * (item.discountPercent || 100);
    });

    setTotalPrice(newTotalPrice);
    setTotalDiscount(newTotalDiscount);
  }, [boughtItems]);

  return (
    <div>
      {/* Show States */}
      <ShoppingCardViewState currentState={currentState} />

      {/* Content */}
      <div className="w-5/6 mx-auto">
        {currentState === "view" && (
          <>
            <h6 className="text-2xl text-black">سبد خرید شما</h6>

            <div className="flex flex-col items-center">
              {boughtItems.map((item) => (
                <ShoppingCardProduct
                  item={item}
                  key={item.id}
                  setItemsHandler={setItemsHandler}
                />
              ))}
            </div>
          </>
        )}
        {currentState === "location" && <ShoppingCardLocationState />}
        {currentState === "buy" && (
          <div className="flex items-center justify-center text-black font-black text-3xl my-10">
            <p className="px-8 py-3 bg-slate-300 rounded-md">صفحه پرداخت...</p>
          </div>
        )}
      </div>

      {/* Buy Manager */}
      <ShoppingCardBuyManager
        currentState={currentState}
        setCurrentState={setCurrentState}
        totalDiscount={totalDiscount}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default ShoppingCard;
