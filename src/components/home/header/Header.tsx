// In the name of ALLAH!
// Mahdi Salehi

import { Link, NavLink } from "react-router-dom";

import { TiThMenu } from "react-icons/ti";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { CiShop } from "react-icons/ci";

interface tab {
  path: string;
  title: string;
  customClasses: string;
}

const tabs: tab[] = [
  { path: "/", title: "صفحه اصلی", customClasses: "" },
  { path: "/", title: "دسته بندی", customClasses: "" },
  {
    path: "/",
    title: "باشگاه مشتریان",
    customClasses: "text-[#E14A60] border-c-pink",
  },
  { path: "/", title: "درباره ما", customClasses: "" },
  { path: "/", title: "تماس با ما", customClasses: "" },
];

function Header() {
  return (
    <div>
      {/* Mobile Section */}
      <div className="flex items-center justify-between sm:hidden">
        <div className="dropdown">
          <label
            className="btn btn-xs py-5 btn-solid-primary my-2"
            tabIndex={1}
          >
            <TiThMenu className="w-7 h-7 text-slate-700" />
          </label>
          <div className="dropdown-menu dropdown-menu-bottom-left">
            {/* <a className="dropdown-item text-sm">Profile</a>
            <a className="dropdown-item text-sm">Account settings</a>
            <a className="dropdown-item text-sm">Subscriptions</a> */}

            <nav>
              {tabs.map(({ path, title, customClasses }) => (
                <>
                  <NavLink
                    to={path}
                    className={`dropdown-item text-sm mx-2 text-right ${customClasses}`}
                  >
                    {title}
                  </NavLink>
                </>
              ))}
            </nav>
          </div>
        </div>

        <p className="text-[20px] text-c-pink">لوگو</p>
      </div>

      {/* Desktop Section */}
      <div className="hidden sm:flex justify-around mt-2">
        <div className="flex gap-3">
          <p className="text-[40px] text-c-pink">لوگو</p>

          <nav>
            {tabs.map(({ path, title, customClasses }) => (
              <>
                <NavLink
                  to={path}
                  className={`mx-2 transition-all duration-100 ease-linear hover:border-b-4 md:text-lg ${customClasses}`}
                >
                  {title}
                </NavLink>{" "}
              </>
            ))}
          </nav>
        </div>

        <div className="flex items-start">
          <div className="mx-2 me-9">
            <FaSearch className="w-5 h-5 md:w-7 md:h-7" />
          </div>

          <Link to="/" className="flex flex-col items-center mx-4">
            <CiShop className="w-5 h-5 md:w-7 md:h-7" />
            <span className="mt-3 md:text-lg">سبد خرید</span>
          </Link>
          <Link to="/" className="flex flex-col items-center mx-4">
            <FaRegUser className="w-5 h-5 md:w-7 md:h-7" />
            <span className="mt-3 md:text-lg">ورود/ثبت نام</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
