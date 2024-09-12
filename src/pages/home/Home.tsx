import Baner from "../../components/home/baner/Baner";
import ContactUs from "../../components/home/contact-us/ContactUs";
import FAQ from "../../components/home/FAQ/FAQ";
import Header from "../../components/home/header/Header";
import DiscountedProduct from "../../components/product/singleProduct/DiscountedProduct";
import NormalProduct from "../../components/product/singleProduct/NormalProduct";
import ProductList from "../../components/product/productList/ProductList";
import ShoppingCard from "../../components/shop/shoppingCard/ShoppingCard";



const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-7">
      <Header />
      {/* <Baner /> */}
      {/* <FAQ /> */}
      {/* <ContactUs /> */}
      {/* <NormalProduct /> */}
      {/* <DiscountedProduct /> */}
      {/* <ProductList /> */}
      <ShoppingCard />
    </div>
  );
};

export default Home;
