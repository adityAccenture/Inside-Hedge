import whatsapp from "../../public/whatsapp.svg.webp";
import telegram from "../../public/Telegram.svg";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import youtube from "../../public/youtube.svg";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex space-x-4">
              <a href="https://wa.me/message/5PBRU4MZKQIUK1" target="_blank">
                <FaSquareWhatsapp className="w-8 h-8 md:w-10 md:h-10" />
              </a>

              <a href="https://t.me/INSIDE_HEDGE" target="_blank">
                <FaTelegram className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a
                href="https://www.facebook.com/share/9jrUzpXt9fB8UX9z/?mibextid=qi2Omg"
                target="_blank"
              >
                <FaFacebook className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a
                href="https://www.instagram.com/inside_hedge?utm_source=qr&igsh=MWRzcXVlNmZoZnlkcw"
                target="_blank"
              >
                <FaSquareInstagram className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="https://www.youtube.com/@INSIDE-HEDGE" target="_blank">
                <FaYoutube className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2021 Inside Hedge. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
