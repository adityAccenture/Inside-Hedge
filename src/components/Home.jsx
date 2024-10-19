import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { FaRegHandPointDown } from "react-icons/fa";
import whatsapp from "../../public/whatsapp.svg.webp";
import telegram from "../../public/Telegram.svg";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import youtube from "../../public/youtube.svg";
import pic1 from "../../public/media.png";
import pic2 from "../../public/pic2.png";
import pic3 from "../../public/pic3.png";
import pic4 from "../../public/pic4.png";
import pic5 from "../../public/pic5.png";
const Home = () => {
  const images = [pic1, pic2, pic3, pic4, pic5]; // Replace with actual image URLs
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle dot navigation
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const navigate = useNavigate();

  const handlePremiumClick = () => {
    navigate("/premium-service");
  };

  const disableRightClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          {/* Text Content */}
          <div className="md:w-1/2 mt-12 md:mt-10 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome To My Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1>Hello, I&apos;m an</h1>
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #fca903 0%, #77fc03 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                <ReactTyped
                  className="font-extrabold"
                  strings={["Advisor"]}
                  typeSpeed={60}
                  backSpeed={50}
                  loop={true}
                />
              </div>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              We are a premier stock trading advisory service that provides
              market insights and helps our clients make informed decisions in
              the stock market.
            </p>
            <br />

            {/* Premium Service Section */}
            <div className="flex flex-col items-center justify-center space-y-4 text-2xl md:text-4xl">
              <div className="text-center">
                <h1 className="font-bold">For Premium Service</h1>
                <div
                  className="flex items-center justify-center space-x-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #fca903 0%, #77fc03 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <ReactTyped
                    className="font-extrabold text-3xl"
                    strings={["Click Here"]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={true}
                  />
                  <FaRegHandPointDown className="text-3xl text-green-500 font-extrabold animate-bounce ml-2 mt-1" />
                </div>
              </div>

              <button
                className="mt-4 bg-gradient-to-r from-yellow-500 to-zinc-500 text-[20px] text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 animate-gradient"
                onClick={handlePremiumClick}
              >
                Get Premium Service
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-col pt-5 md:pt-10 md:flex-row justify-between items-center space-y-5 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center md:text-left">
                  Follow us on
                </h1>
                <ul className="flex  justify-center space-x-3 md:space-x-7 md:justify-start">
                  {/* Social Media Icons */}
                  <li className="text-4xl md:text-6xl cursor-pointer">
                    <a
                      href="https://wa.me/message/5PBRU4MZKQIUK1"
                      target="_blank"
                    >
                      <img
                        className="w-14 h-14 md:w-16 md:h-16"
                        src={whatsapp}
                        alt="whatsapp"
                      />
                    </a>
                  </li>
                  <li className="text-4xl md:text-6xl cursor-pointer">
                    <a href="https://t.me/INSIDE_HEDGE" target="_blank">
                      <img
                        className="w-14 h-14 md:w-16 md:h-16"
                        src={telegram}
                        alt="telegram"
                      />
                    </a>
                  </li>
                  <li className="text-4xl md:text-6xl cursor-pointer">
                    <a
                      href="https://www.facebook.com/share/9jrUzpXt9fB8UX9z/?mibextid=qi2Omg"
                      target="_blank"
                    >
                      <img
                        className="w-14 h-14 md:w-16 md:h-16"
                        src={facebook}
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li className="text-4xl md:text-6xl cursor-pointer">
                    <a
                      href="https://www.instagram.com/inside_hedge?utm_source=qr&igsh=MWRzcXVlNmZoZnlkcw"
                      target="_blank"
                    >
                      <img
                        className="w-14 h-14 md:w-16 md:h-16"
                        src={instagram}
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li className="text-4xl md:text-6xl cursor-pointer">
                    <a
                      href="https://www.youtube.com/@INSIDE-HEDGE"
                      target="_blank"
                    >
                      <img
                        className="w-14 h-14 md:w-16 md:h-16"
                        src={youtube}
                        alt="youtube"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative md:w-1/2 md:ml-24 mt-8 md:mt-12 order-1 h-[260px] md:h-[450px]">
            {/* Image Slider */}
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                onContextMenu={disableRightClick}
                className={`rounded-xl w-[100%] h-[260px]  md:h-[450px] absolute transition-opacity duration-1000 ${
                  currentImageIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Left arrow for manual navigation */}
            <button
              onClick={prevImage}
              className="absolute hidden md:block top-1/2 left-2 transform -translate-y-1/2 text-2xl  text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
            >
              ‹
            </button>

            {/* Right arrow for manual navigation */}
            <button
              onClick={nextImage}
              className="absolute hidden md:block top-1/2 right-2 transform -translate-y-1/2 text-2xl  text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
            >
              ›
            </button>

            {/* Dots to show current image index */}
            <div className="absolute  md:mt-0 bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentImageIndex === index ? "bg-blue-500" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};
export default Home;
