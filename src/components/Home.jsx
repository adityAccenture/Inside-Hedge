import { RiFacebookBoxFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { FaWhatsappSquare } from "react-icons/fa";
import pic from "../../public/media.png";
const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 ">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl ">
              <h1>Hello, I&apos;m a</h1>
              {/* <span className="text-red-700 font-bold"> Trader</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Advisor"]}
                typeSpeed={60}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              We are a premier stock trading advisory service that provides
              market insights and helps our clients make informed decisions in
              the stock market.
            </p>
            <br />
            <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 ">
              <div className="space-y-2 ">
                <h1 className="font-bold text-center md:text-left ">
                  Available on
                </h1>
                <ul className="flex space-x-5 ">
                  <li className="text-6xl cursor-pointer">
                    <a href="https://wa.me/7019445175" target="_blank">
                      <FaWhatsappSquare />
                    </a>
                  </li>
                  <li className="text-6xl cursor-pointer">
                    <a href="https://t.me/INSIDE_HEDGE" target="_blank">
                      <FaTelegram />
                    </a>
                  </li>
                  <li className="text-6xl cursor-pointer">
                    <a
                      href="https://www.facebook.com/share/9jrUzpXt9fB8UX9z/?mibextid=qi2Omg"
                      target="_blank"
                    >
                      <RiFacebookBoxFill />
                    </a>
                  </li>
                  <li className="text-6xl cursor-pointer">
                    <a
                      href="https://www.instagram.com/inside_hedge?utm_source=qr&igsh=MWRzcXVlNmZoZnlkcw"
                      target="_blank"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>

                  <li className="text-6xl cursor-pointer">
                    <a
                      href="https://youtube.com/@insidehedge?si=JbNdc-cHbUvR4kkO"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-40 mt-8 md:mt-16 order-1">
            <img
              src={pic}
              className="rounded-xl md:w-[450px] md:h-[450px]"
              alt="image"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Home;
