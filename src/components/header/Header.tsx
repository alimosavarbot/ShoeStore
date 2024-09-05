// In the name of ALLAH!
// Mahdi Salehi

import { Link, NavLink } from "react-router-dom"

import userIcon from "./assets/user.svg"
import shopIcon from "./assets/shop.svg"
import searchIcon from "./assets/search.svg"
import React from "react"



interface Tab {
  path: string
  title: string
  customClasses: string
}

const tabs : Tab[] = [
  {path: "/", title: "صفحه اصلی", customClasses: ""},
  {path: "/", title: "دسته بندی", customClasses: ""},
  {path: "/", title: "باشگاه مشتریان", customClasses: "text-[#E14A60] border-c-pink"},
  {path: "/", title: "درباره ما", customClasses: ""},
  {path: "/", title: "تماس با ما", customClasses: ""},
]

function Header() {
  return (
    <div className="w-4/5 mx-auto py-2 flex items-center">
      <p className="text-[64px] text-c-pink me-10">لوگو</p>

      <nav>
        {
          tabs.map(({ path, title, customClasses } : Tab, index) => (
            <React.Fragment key={index}>
              <NavLink
                to={path}
                className={`mx-2 text-[20px] transition-all duration-100 ease-linear hover:border-b-4 ${customClasses}`}
              >{title}</NavLink>{" "}
            </React.Fragment>
          ))
        }
      </nav>

      <div className="flex ms-auto items-start">
        <div className="mx-2 me-9">
          <img src={searchIcon} alt="search-icon" />
        </div>

        <Link to="/" className="flex flex-col items-center mx-4">
          <img src={shopIcon} alt="shop-icon" />
          <span className="text-[15px] mt-3">سبد خرید</span>
        </Link>
        <Link to="/" className="flex flex-col items-center mx-4">
          <img src={userIcon} alt="user-icon" />
          <span className="text-[15px] mt-3">ورود/ثبت نام</span>
        </Link>
      </div>
    </div>
  )
}

export default Header