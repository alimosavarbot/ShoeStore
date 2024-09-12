// In the name of ALLAH!
// Mahdi Salehi

import { ChangeEvent, useEffect, useState } from "react"


export interface boughtItemType {
  img: string
  title: string
  brand: string
  price: string
  color: string
  size: number
  total: number
  id: number
}

interface ShoppingCardItemProps {
  item: boughtItemType
  removeItem: Function
}


function ShoppingCardItem({ item, removeItem } : ShoppingCardItemProps) {
  const [total, setTotal] = useState<number>(item.total)
  console.log(item.total, total)
  const increaseHandler = () => {
    if (total >= 99) {
      setTotal(99)
      return
    }

    setTotal(total + 1)
  }

  const decreaseHandler = () => {
    if (total <= 0) {
      setTotal(0)
      return
    }

    setTotal(total - 1)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = +e.currentTarget.value

    if (String(value).length > 2) {
      return
    }
    
    if (value >= 99) {
      value = 99
    } else if (value <= 0) {
      value = 0
    }

    setTotal(value)
  }

  useEffect(() => {
    if (total <= 0) {
      removeItem()
      alert("محصول از سبد خرید شما حذف شد")
    }
  }, [total])

  return (
    <div className="flex justify-evenly border border-black p-4 m-10 w-full h-64">
      <div className="w-60 me-4">
        <img src={item.img} alt="shoe-img" />
      </div>

      <div className="flex flex-col justify-evenly text-2xl my-1 me-auto">
        <span>{item.brand}</span>

        <span>{item.title}</span>

        <div>
          <span className="opacity-70">سایز:</span>
          <span>{item.size}</span>
        </div>

        <div>
          <span className="opacity-70 font-bold">رنگ: </span>
          <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
        </div>
      </div>

      <div className="flex items-center text-2xl mx-auto pb-14">
        <span className="opacity-70 mx-5">تعداد:</span>

        <div className="flex items-center pt-1">
          <button className="text-5xl font-extralight" onClick={increaseHandler}>+</button>
          <input type="number" name="item-$id" id="item-$id" min={0} max={100} value={total} onChange={changeHandler} className="text-center w-12 border border-black rounded text-lg pt-1 h-7 mx-5" />
          <button className="text-5xl font-extralight" onClick={decreaseHandler}>-</button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-3xl mx-12 ms-auto pb-4">
        <span>قیمت:</span>
        <span className="mt-2">{item.price}</span>
      </div>
    </div>
  )
}

export default ShoppingCardItem