import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div style={{
      gridTemplateColumns: "300px 1fr",
      maxHeight: "fit-content"
    }} className='container mx-auto  grid grid-cols-2  '>
      <aside className='flex flex-col gap-6 text-lg font-medium border-r-2 pt-6 '>
        <div className="women-fashion">
          <p className='flex justify-between items-center pr-8'>Woman’s Fashion
            <span className='relative top-[2.5px]'><IoIosArrowForward /></span>
          </p>
        </div>
        <div className="men-fashion">
          <p className='flex justify-between items-center pr-8'>Men's Fashion
            <span className='relative top-[2.5px]'><IoIosArrowForward /></span>
          </p>
        </div>
        <Link className='' to={'category/electronics'}>Electronics</Link>
        <Link className='' to={'category/home-lifesytle'}>Home & Lifesytle</Link>
        <Link className='' to={'category/medicine'}>Medicine</Link>
        <Link className='' to={'category/sports-outdoor'}>Sports & Outdoor</Link>
        <Link className='' to={'category/babies-toys'}>Baby’s & Toys</Link>
        <Link className='' to={'category/groceries-pets'}>Groceries & Pets</Link>
        <Link className='' to={'category/health-beauty'}>Health & Beauty</Link>

      </aside>

      <div className='slider w-full h-full flex justify-end pt-8 '>
        <img src="/images/hero-banner.png" className='h-full relative ' alt='Hero Banner' />
      </div>
    </div>
  )
}

export default Hero