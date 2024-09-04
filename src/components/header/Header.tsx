// In the name of ALLAH!
// Mahdi Salehi

import { NavLink } from "react-router-dom"

import userIcon from "./assets/user.svg"
import shopIcon from "./assets/shop.svg"
import searchIcon from "./assets/search.svg"



interface tab {
  path: string
  title: string
  customClasses: string
}

const tabs : tab[] = [
  {path: "/", title: "صفحه اصلی", customClasses: ""},
  {path: "/", title: "دسته بندی", customClasses: ""},
  {path: "/", title: "باشگاه مشتریان", customClasses: "text-[#E14A60]"},
  {path: "/", title: "درباره ما", customClasses: ""},
  {path: "/", title: "تماس با ما", customClasses: ""},
]

function Header() {
  return (
    <div className="w-4/5 mx-auto py-2 flex items-center">
      <p className="text-[64px] text-c-pink me-10">لوگو</p>

      <nav>
        {
          tabs.map(({ path, title, customClasses }) => (
            <NavLink
              to={path}
              className={`mx-2 text-[20px] ${customClasses}`}
            >{title}{" "}</NavLink>
          ))
        }
      </nav>

      <div className="flex ms-auto items-start">
        <div className="mx-2 me-9">
          <img src={searchIcon} alt="search-icon" />
        </div>

        <div className="flex flex-col items-center mx-4">
          <img src={shopIcon} alt="shop-icon" />
          <span className="text-[15px] mt-3">سبد خرید</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <img src={userIcon} alt="user-icon" />
          <span className="text-[15px] mt-3">ورود/ثبت نام</span>
        </div>
      </div>
    </div>
  )
}

export default Header