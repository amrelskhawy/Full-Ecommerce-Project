import { RiArrowDownSLine } from "react-icons/ri";
import { CiSearch} from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import clsx from 'clsx';
import { FaRegHeart } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface IRoute {
  id: number
  path: string
  title: string
  active: boolean
}

export function Navbar() {

  const {pathname} = useLocation()

  const routes: IRoute[] = [
    {
      id: 1,
      path: "/",
      title: "Home",
      active: pathname === "/"
    },
    {
      id: 2,
      path: "/contact",
      title: "Contact",
      active: pathname === "/contact"
    },
    {
      id: 3,
      path: "/about",
      title: "About",
      active: pathname === "/about"
    },
    {
      id: 4,
      path: "/sign-up",
      title: "Sign Up",
      active: pathname === "/sign-up"
    },
  ]

  useEffect(() => {
    console.log(pathname);
    
  }, [pathname])


  return (
    <header className="grid gap-6 border-b-2 pb-4 " >
      <div className="bg-black" >
        <div className=" container  mx-auto flex w-full py-4  justify-center  text-white text-sm">
          <p className="flex-1 text-center">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="inline-block ml-3 font-semibold underline">ShopNow</span>
          </p>
          <button className="text-end flex justify-center items-center gap-1">
            English
            <span><RiArrowDownSLine className="text-lg" /> </span>
          </button>
        </div>
      </div>
      <nav style={{
        gridTemplateColumns: "1fr 2fr 1fr"
      }} className="container mx-auto grid  items-center  ">
        <h2 className="text-xl font-semibold">Exclusive</h2>

        <div className="nav-links flex gap-8">
          {
            routes.map(route => <Link className={clsx(
              route.active && "relative after:absolute after:-bottom-[.5px] after:w-[98%] after:bg-black after:h-[1px] after:left-[1px]",
              "text-lg"
            )} key={route.id} to={route.path}>{route.title}</Link>)
          }
        </div>

        <div className="other-controls flex  justify-end items-center gap-6">
          <div  className="bg-secondary flex justify-between px-2 items-center rounded-[4px] w-60 h-9">
            <input type="text" placeholder="What are you looking for?" className="text-sm bg-transparent outline-none border-none" />
            <CiSearch color="#000" />
          </div>

          <FaRegHeart size={"20px"}/>
          <FiShoppingCart size={"20px"} />
        </div>
      </nav>
    </header>
  );
}
