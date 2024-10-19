import pic from "../../public/mahesh.jpg";
const About = () => {
  const disableRightClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20  my-8 md:my-16"
      >
        <div className="flex flex-col md:flex-row items-center md:justify-center shadow md:shadow-sm  mb-10">
          {/* Founder Photo */}
          <img
            src={pic} // Replace this with the actual image path or URL
            alt="Inside Hedge Founder"
            className="w-32 h-32 rounded-lg border-2 border-blue-400 object-cover mb-4 md:mb-0 md:mr-8"
            onContextMenu={disableRightClick}
          />

          {/* Founder Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">Mahesh Bhat</h2>
            <p className="text-md text-gray-700">
              Inside Hedge Founder and CEO
            </p>
          </div>
        </div>

        {/* About Content */}
        <h1 className=" text-3xl font-bold mb-5">About</h1>
        <p className="text-sm md:text-lg mb-5">
          At INSIDE HEDGE we are committed to providing investors with
          cutting-edge insights and resources to help navigate the complexities
          of the stock market. Founded by a team of financial experts and
          seasoned traders, our service is designed to empower both novice and
          experienced investors to make informed decisions in real-time.
        </p>

        <p className="text-sm md:text-lg mb-5">
          With a passion for transparency and innovation, our mission is to
          demystify the stock market by offering a user-friendly advanced
          analytical service and educational content. Whether you’re looking to
          build a diversified portfolio or actively trade in the markets, we are
          here to provide the support and information you need to succeed.
        </p>

        <p className="text-sm md:text-lg">
          Join us on the journey to financial independence and take control of
          your investment future with INSIDE HEDGE.
        </p>
      </div>

      <hr />
    </>
  );
};
export default About;
