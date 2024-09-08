// In the name of ALLAH!
// Mahdi Salehi



import shoeImg from "../assets/shoe.png"

import shopIcon from "../../home/header/assets/shop.svg"



interface DiscountedProductProps {
  img: string
  title: string
  description: string
  discountPercent: string
  price: string
  discountedPrice: string
  colors: string[]
}

const init : DiscountedProductProps = {
  img : shoeImg,
  title : "کفش وینو مدل 5931",
  description : "لورم ایپسوم متن ساختگی با نماد ساختگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  discountPercent : "15",
  price : "780/000",
  discountedPrice : "633/000",
  colors : [
    "red",
    "blue",
    "green",
    "purple",
  ]
}


// function DiscountedProduct(props : DiscountedProductProps) {
  function DiscountedProduct() {
  const {
    img,
    title,
    description,
    discountPercent,
    price,
    discountedPrice,
    colors,
  } = init

  return (
    <div
      className="relative rounded-3xl max-w-[360px]"
      style={{ boxShadow: "2px 2px 8px 0px #999" }}
    >

      {/* Discount percent */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <p className="bg-red-600 pb-1 pt-2 text-center absolute w-full translate-x-[50%] top-2 right-9 rotate-45 text-3xl font-bold">{discountPercent}%</p>
      </div>

      {/* Image */}
      <img
        src={img}
        alt="shoe-image"
        className="-translate-y-1/4 mx-auto mb-[-10%] z-10"
      />

      <div className="px-3 relative z-10">
        {/* Title */}
        <p className="text-center text-3xl">{title}</p>

        {/* Description */}
        <p className="text-center text-lg my-5">{description}</p>

        {/* Operations */}
        <div className="flex">
          <img src={shopIcon} alt="shop-icon" className="mx-2" />

          <div className="mx-auto flex items-center">
            {
              colors.map(color => (
                <span style={{ backgroundColor: color }} className="block w-7 h-7 rounded-full mx-1" />
              ))
            }
          </div>

          <button className="bg-c-pink text-xl font-bold py-2 px-2 rounded-xl ms-auto">مشاهده بیشتر</button>
        </div>

        {/* Price & Discount */}
        <div className="flex text-2xl flex-wrap text-nowrap my-4">
          <span>{discountedPrice} تومان</span>
          <del className="ms-auto">{price} تومان</del>
        </div>
      </div>
    </div>
  )
}

export default DiscountedProduct