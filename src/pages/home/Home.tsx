import Baner from "../../components/home/baner/Baner";
import ContactUs from "../../components/home/contact-us/ContactUs";
import FAQ from "../../components/home/FAQ/FAQ";
import Header from "../../components/home/header/Header";
import DiscountedProduct from "../../components/production/product/DiscountedProduct";

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-7">
      <Header />
      {/* <Baner /> */}
      {/* <FAQ /> */}
      {/* <ContactUs /> */}
      <DiscountedProduct />
    </div>
  );
};

export default Home;
