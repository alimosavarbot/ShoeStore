import { GoFileDirectoryFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-c-pink-80 rounded-t-xl  p-4 shadow-lg !m-0 ">
      <div className="">
        <div className="flex flex-col items-center my-5">
          <p className="text-lg sm:text-2xl">دسترسی سریع</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 sm:gap-5 w-full ">
          {/* Category */}
          <div className="flex flex-col items-center w-60">
            <div className="flex gap-1 items-center">
              <GoFileDirectoryFill className="text-gray-700" />
              <p className="text-lg">دسته بندی ها</p>
            </div>
            <ul>
              <li className="py-2">لورم ایپسوم</li>
              <li className="py-2">لورم ایپسوم</li>
              <li className="py-2">لورم ایپسوم</li>
            </ul>
          </div>

          {/* Customer club */}
          <div className="flex flex-col items-center w-60">
            <div className="flex gap-1 items-center">
              <FaUser className="text-gray-700" />
              <p className="text-lg">باشگاه مشتریان</p>
            </div>
            <ul>
              <li className="py-2">لورم ایپسوم</li>
              <li className="py-2">لورم ایپسوم</li>
              <li className="py-2">لورم ایپسوم</li>
            </ul>
          </div>

          {/* Contact us */}
          <div className="flex flex-col items-center w-60">
            <div className="flex gap-1 items-center">
              <FaPhoneAlt className="text-gray-700" />
              <p className="text-lg">ارتباط با ما</p>
            </div>
            <ul>
              <li className="py-2">لورم ایپسوم</li>
              <li className="py-2">لورم ایپسوم</li>
              <li className="py-2">لورم ایپسوم</li>
            </ul>
          </div>

          {/* About us */}
          <div className="flex flex-col items-center w-60">
            <div className="flex gap-1 items-center">
              <FaCircleQuestion className="text-gray-700" />
              <p className="text-lg">درباره ما</p>
            </div>
            <ul>
              <li className="py-2">لورم ایپسوم</li>
              <li className="py-2">لورم ایپسوم</li>
              <li className="py-2">لورم ایپسوم</li>
            </ul>
          </div>

          {/* Order tracking */}
          <div className="flex flex-col items-center w-60">
            <div className="flex gap-1 items-center">
              <FaBookOpen className="text-gray-700" />
              <p className="text-lg">پیگیری سفارش</p>
            </div>
            <ul>
              <li className="py-2">لورم ایپسوم</li>
              <li className="py-2">لورم ایپسوم</li>
              <li className="py-2">لورم ایپسوم</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
