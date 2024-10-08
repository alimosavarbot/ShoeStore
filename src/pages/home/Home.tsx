import Baner from "../../components/home/baner/Baner";
import ContactUs from "../../components/home/contact-us/ContactUs";
import FAQ from "../../components/home/FAQ/FAQ";
import Header from "../../components/home/header/Header";
import Slider from "../../components/home/slider/Slider";
import DiscountedProduct from "../../components/product/singleProduct/DiscountedProduct";
import NormalProduct from "../../components/product/singleProduct/NormalProduct";
import ProductList from "../../components/product/productList/ProductList";
import ShoppingCard from "../../components/shop/shoppingCard/ShoppingCard";
import Footer from "../../components/home/footer/Footer";
import Offer from "../../components/home/offer/Offer";

const Home = () => {
  return (
    <div className="">
      <div className="mt-4 flex flex-col gap-10 m-5">
        <Header />
        <Baner />
        <Slider />
        <Offer />
        <FAQ />
        {/* <Baner /> */}
        {/* <FAQ /> */}
        {/* <ContactUs /> */}
        {/* <NormalProduct /> */}
        {/* <DiscountedProduct /> */}
        {/* <ProductList /> */}
        {/* <ShoppingCard /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
