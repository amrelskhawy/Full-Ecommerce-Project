import { RiArrowDownSLine } from "react-icons/ri";

export function Navbar() {
  return (
    <header className="bg-black">
      <div className="top-header container mx-auto flex w-full p-4  justify-center  text-white text-sm">
        <p className="flex-1 text-center">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="inline-block ml-3 font-semibold underline">ShopNow</span>
        </p>
        <button className="text-end flex justify-center items-center gap-1">
          English
          <span><RiArrowDownSLine className="text-lg" /> </span>
        </button>
      </div>
    </header>
  );
}
