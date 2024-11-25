import { AiFillStar } from "react-icons/ai";
import { FiEye, FiHeart  } from "react-icons/fi";

export const SectionRowCard = () => {
  return (
    <div className='w-[250px] h-[350px] grid gap-2'>
      <div className="image-container relative p-6 group rounded-md overflow-hidden bg-secondary">
        <span className='bg-red-500 text-sm text-white p-1 px-2 rounded-md absolute top-4 left-4'>-40%</span>
        <div className="absolute right-4 top-4 grid gap-2">
          <FiEye className="bg-white p-[3.5px] cursor-pointer rounded-full text-2xl" />
          <FiHeart className="bg-white p-[3.5px] cursor-pointer rounded-full text-2xl"  />
        </div>
        <img src="/images/product-img.png" className='w-full mx-auto transition-all  group-hover:scale-90' alt="Product Preview" />
        <button className='bg-black text-white w-full  absolute left-0 group-hover:bottom-0 transition-all -bottom-12 p-[6px] '>
          ADD TO CART
        </button>
      </div>

      <p className='text-xl font-medium '>HAVIT HV-G92 Gamepad</p>
      <p className='flex gap-4 font-medium text-lg'>
        <span className='price-after text-red-500'>$120</span>
        <span className='price-before opacity-55 line-through'>$160</span>
      </p>

      <div className="rating flex text-lg items-center">
        <AiFillStar color='FFAD33' />
        <AiFillStar color='FFAD33' />
        <AiFillStar color='FFAD33' />
        <AiFillStar color='FFAD33' />
        <AiFillStar className='text-gray-300' />
        <span className='inline-block text-sm font-bold text-gray-500 ml-2'>( 88 )</span>
      </div>
    </div>
  )
}
