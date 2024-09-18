import Baner from "../../components/home/baner/Baner";
import ContactUs from "../../components/home/contact-us/ContactUs";
import FAQ from "../../components/home/FAQ/FAQ";
import Header from "../../components/home/header/Header";
import Slider from "../../components/home/slider/Slider";

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-7">
      <Header />
      <Baner />
      <Slider />
      <FAQ />
      {/* <ContactUs /> */}
    </div>
  );
};

export default Home;
