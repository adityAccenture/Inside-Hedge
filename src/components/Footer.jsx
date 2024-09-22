import {
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex space-x-4">
              <a href="https://wa.me/7019445175" target="_blank">
                <FaWhatsappSquare size={27} />
              </a>
              <a
                href="https://www.facebook.com/share/9jrUzpXt9fB8UX9z/?mibextid=qi2Omg"
                target="_blank"
              >
                <FaFacebook size={24} />
              </a>
              <a href="https://t.me/INSIDE_HEDGE" target="_blank">
                <FaTelegram size={24} />
              </a>
              <a
                href="https://www.instagram.com/inside_hedge?utm_source=qr&igsh=MWRzcXVlNmZoZnlkcw"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com/@insidehedge?si=JbNdc-cHbUvR4kkO"
                target="_blank"
              >
                <FaYoutube size={24} />
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
