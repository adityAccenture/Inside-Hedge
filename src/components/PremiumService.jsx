import { IoMdArrowDropright } from "react-icons/io";
const PremiumService = () => {
  return (
    <div className="container flex flex-col justify-between mx-auto px-4 pt-8 pb-24 mb-6 md:mb-0 md:pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Column 1: Swing Trade */}
        <div className="border border-gray-300 rounded-lg shadow-lg bg-blue-300 ">
          <h2 className="text-3xl font-bold bg-slate-800 text-white py-4 rounded-t-lg mb-4 text-center">
            SWING TRADE
          </h2>
          <ul className="space-y-2 p-4 font-serif text-md">
            <li className="flex items-start">
              <IoMdArrowDropright className="flex-shrink-0 " size={22} />
              <span className="ml-1">
                Stocks investment is not just swiping the buy button..
              </span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">It&apos;s a matter of analysis.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright className="flex-shrink-0" size={22} />
              <span className="ml-1">
                Investing in bad stocks can lag your portfolio growth.
              </span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Know your investments are safe.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright className="flex-shrink-0" size={22} />
              <span className="ml-1">
                Always invest in good, growing stocks.
              </span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Good return swing stocks.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">World-class strategy for swing.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Aggressive return for trade.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Perfect entry and exit.</span>
            </li>
          </ul>
          <p className="p-4 font-bold ">CHECK PREVIOUS CALL & PERFORMANCE</p>
        </div>

        {/* Column 2: Nifty & Bank Nifty Options */}
        <div className="border border-gray-300 rounded-lg shadow-lg bg-blue-300 ">
          <h2 className="text-3xl font-bold bg-slate-800 text-white py-4 rounded-t-lg mb-4 text-center">
            FNO
          </h2>
          <ul className="space-y-2 p-4  font-serif text-md">
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Nifty option calls.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Bank Nifty options calls.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">FinNifty options calls.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Stock options.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Live market support.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Perfect entry & exit.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Always be profitable</span>
            </li>
          </ul>
        </div>
        {/* Column 3: MCX Segments */}
        <div className="border border-gray-300 rounded-lg shadow-lg bg-blue-300 ">
          <h2 className="text-3xl font-bold bg-slate-800 text-white py-4 rounded-t-lg mb-4 text-center">
            MCX SEGMENTS
          </h2>
          <ul className="space-y-2 p-4 text-md font-serif">
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Trade like a pro in MCX.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Crude oil calls.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Natural gas calls.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright size={22} />
              <span className="ml-1">Profitable calls only.</span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright className="flex-shrink-0 " size={22} />
              <span className="ml-1">
                Live support for all premium members.
              </span>
            </li>
            <li className="flex items-start">
              <IoMdArrowDropright className="flex-shrink-0" size={22} />
              <span className="ml-1">
                Join fast and get premium membership.
              </span>
            </li>
          </ul>
          <p className="mt-2 p-4 font-bold">JOIN OUR PREMIUM SERVICE</p>
        </div>
      </div>

      {/* Join Button fixed at the bottom */}
      <div className="fixed bottom-0 left-0 w-full mt-8 bg-blue-600 text-center py-4 shadow-lg md:relative md:bg-transparent md:py-0 md:pb-8">
        <a
          href="https://wa.me/message/5PBRU4MZKQIUK1"
          className="bg-green-500 text-white py-3 px-6 rounded-lg text-xl hover:bg-green-600 transition inline-block md:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Our Premium Service on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default PremiumService;
