import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";


export const Footer = () => {

  const links = [
    {
      path: 'my-account',
      title: "My Account"
    },
    {
      path: 'sign-in',
      title: "Login / Register"
    },
    {
      path: 'my-cart',
      title: "Cart"
    },
    {
      path: 'wishlist',
      title: "Wishlist"
    },
    {
      path: 'shop',
      title: "Shop"
    },
  ]

  const subLinks = [
    {
      path: 'privacy-policy',
      title: "Privacy Policy"
    },
    {
      path: 'terms-of-use',
      title: "Terms Of Use"
    },
    {
      path: 'faq',
      title: "FAQ"
    },
    {
      path: 'contact',
      title: "Contact"
    },

  ]
  return (
    <footer className="bg-black text-white" >
      <div className="container py-12 grid grid-cols-5 gap-8">

        <div className=" flex flex-col gap-4">
          <h4 className="font-medium text-2xl">Exclusive</h4>
          <button className="w-fit font-medium mt-3">Subscribe</button>
          <p className="text-sm">Get 10% off your first order</p>

          <div className="outline outline-1 flex justify-between px-2 items-center rounded-[4px] w-48 h-9 ">
            <input type="email" placeholder="Enter your email" className="text-xs bg-transparent outline-none border-none" />
            <img className="relative right-2 w-5" src="/public/icons/arrow-right.svg" alt="arrow-right" />
          </div>
        </div>

        <div className=" flex flex-col gap-4 w-48">
          <h4 className="font-medium text-2xl">Support</h4>

          <p className="mt-3">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>

          <p>exclusive@gmail.com</p>

          <p>+88015-88888-9999</p>
        </div>

        <div className=" flex flex-col gap-4">
          <h4 className="font-medium text-2xl">Account</h4>

          <div className="flex flex-col mt-3 gap-3">
            {
              links.map(link => (
                <Link key={link.path} to={"/" + link.path}>{link.title}</Link>
              ))
            }
          </div>
        </div>

        <div className=" flex flex-col gap-4">
          <h4 className="font-medium text-2xl">Quick Link</h4>

          <div className="flex flex-col mt-3 gap-3">
            {
              subLinks.map(link => (
                <Link key={link.path} to={"/" + link.path}>{link.title}</Link>
              ))
            }
          </div>
        </div>

        <div className="">
          <h4 className="font-medium text-2xl">Download App</h4>

          <p className="mt-8 mb-4 text-secondary/60 text-sm">Save $3 with App New User Only</p>
          <img src="/public/images/footer-get-app.png" alt="Get App" />

          <div className="social-links flex mt-6 text-xl gap-7 items-center">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

      </div>

      <p className=" container text-center text-xl pb-8 opacity-20">
        &copy; Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  )
}
