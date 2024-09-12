// In the name of ALLAH!
// Mahdi Salehi

import shoeImg from "../../assets/images/shoe.png"
import shopIcon from "../../assets/images/shop.svg"
import heartIcon from "../../assets/images/heart.svg"


interface NormalProductProps {
  img: string
  title: string
  price: string
  colors: string[]
}

const init : NormalProductProps = {
  img : shoeImg,
  title : "کفش وینو مدل 5931",
  price : "780/000",
  colors : [
    "red",
    "blue",
    "green",
    "purple",
  ]
}




function NormalProduct() {
  const {
    img,
    title,
    price,
    colors,
  } = init

  return (
    <div
      className="relative rounded-3xl max-w-[360px] hover:scale-105 transition-all duration-200"
      style={{ boxShadow: "2px 2px 8px 0px #999" }}
    >
      {/* Like Button */}
      <div className="absolute top-2 right-2 z-10 cursor-pointer">
        <img
          src={heartIcon}
          alt="like"
          className="w-8"
          onClick={() => alert("محصول لایک شد")}
        />
      </div>


      {/* Image */}
      <img
        src={img}
        alt="shoe-image"
        className="-translate-y-1/4 mx-auto mb-[-5%] cursor-pointer"
        onClick={() => alert("محصول انتخاب شد")}
      />

      <div className="px-3 relative z-10">
        {/* Title */}
        <p className="text-start text-3xl overflow-hidden overflow-ellipsis whitespace-nowrap">{title}</p>

        

        {/* colors */}
        <div className="mx-auto my-4 flex items-center">
          {
            colors.map(color => (
              <span
                style={{ backgroundColor: color }}
                className="block w-7 h-7 rounded-full mx-1 cursor-pointer"
                onClick={() => alert(`رنگ ${color} انتخاب شد`)}
              />
            ))
          }
        </div>

        {/* Price & Discount */}
        <div className="flex text-2xl flex-wrap text-nowrap mt-10 mb-4">
          <img
            src={shopIcon}
            alt="shop-icon"
            className="mx-2 cursor-pointer"
            onClick={() => alert("محصول به سبد خرید اضافه شد")}
          />
          <span className="ms-auto">{price} تومان</span>
        </div>
      </div>
    </div>
  )
  
}

export default NormalProduct