import pic from "../../public/logo.jpg";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  // Function to disable right-click on the image
  const disableRightClick = (e) => {
    e.preventDefault();
  };
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
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-[75px] fixed top-0 left-0 right-0 z-10 bg-blue-950 border-b">
        <div className="flex  justify-between h-[70px]  items-center">
          <div className="flex space-x-2 items-center">
            <img
              src={pic}
              className="h-16 w-16 rounded-full border-2 border-zinc-200 border-collapse mt-2 cursor-pointer"
              alt="logo"
              onClick={openModal}
              onContextMenu={disableRightClick}
            />
            <div className="flex flex-col items-center">
              <h1 className="font-semibold md:pt-2">
                <span className="text-green-400 text-3xl md:text-4xl">
                  INSIDE
                </span>
                <span className="text-red-600 text-3xl md:text-4xl">
                  {" "}
                  HEDGE
                </span>
              </h1>
              <h3 className="text-white text-xs">A Step Towards Growth</h3>
            </div>
          </div>
          <div>
            <ul className="hidden  md:flex space-x-8  text-white">
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
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
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
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-80">
            <div className="relative">
              {/* Fullscreen logo */}
              <img
                src={pic}
                alt="Full logo"
                className="h-auto w-auto max-h-screen max-w-screen"
                onContextMenu={disableRightClick}
              />
              {/* Cancel/Close button */}
              <button
                className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300"
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default NavBar;
