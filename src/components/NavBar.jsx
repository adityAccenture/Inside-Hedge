import pic from "../../public/logo.png";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Contact",
    },
    {
      id: 3,
      text: "About",
    },
    {
      id: 4,
      text: "Services",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-10 bg-white">
        <div className="flex justify-between h-16 items-center ">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-3xl cursor-pointer">
              <span className="text-green-500 text-4xl">INSIDE</span>
              <span className="text-red-500 text-4xl"> HEDGE</span>
            </h1>
          </div>
          <div>
            <ul className="hidden  md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <IoCloseSharp size={24} /> : <TiThMenu size={24} />}
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl font-semibold">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  <Link
                    onClick={() => setMenuOpen(!menuOpen)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default NavBar;
