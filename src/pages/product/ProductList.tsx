// In the name of ALLAH!
// Mahdi Salehi

import DiscountedProduct from "../../components/product/DiscountedProduct"



function ProductList() {


  return (
    <div className="flex flex-wrap justify-center mt-10 sm:mx-20 mx-5">
      {Array.from(Array(30)).map(() => (
        <div className="m-5 mt-20">
          <DiscountedProduct />
        </div>
      ))}
    </div>
  )
}

export default ProductList