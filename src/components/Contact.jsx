import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { useState } from "react";
const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  emailjs.init("G3SRRmAlvVjvXt1Sv");
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (isSubmitted) {
      toast.warn("Your message is already sent");
    }
    const userInfo = {
      from_name: data.name,
      email: data.email,
      mobileNumber: data.mobileNumber,
      message: data.message,
    };
    emailjs.send("service_110yugc", "template_ro1d0ij", userInfo).then(
      (response) => {
        console.log("SUCCESS!", response.status);
        setIsSubmitted(true);
        toast.success(
          "Thank you for your message! I will get back to you shortly."
        );
      },
      (err) => {
        setIsSubmitted(false);
        console.error("FAILED...", err);
        toast.error(
          "Sorry couldn't submit your message! please try again later."
        );
      }
    );
    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${encodeURIComponent(
          userInfo
        )}`
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-14"
      >
        <div className="flex flex-col md:flex-row">
          {/* Text Content */}
          <div className="md:w-1/2  space-y-2 ">
            <h1 className="text-3xl font-bold mb-4">Contact us</h1>
            <span className="">
              Please fill out the form below to contact us
            </span>
            <div className="flex flex-col justify-center mt-5 px-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-5 shadow w-full max-w-md md:max-w-lg px-8 py-6 rounded-xl"
              >
                <h1 className="text-cl font-semibold mb-4">
                  Send your message
                </h1>

                {/* Name Field */}
                <div className="relative flex flex-col mb-4">
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="shadow rounded-lg appearance-none border py-2 px-3 leading-tight focus:outline-none focus:border-black text-gray-700 focus:shadow-outline"
                  />
                  {/* Clear Button */}
                  {watch("name") && (
                    <button
                      type="button"
                      onClick={() => resetField("name")}
                      className="absolute right-3 top-7 text-gray-500 text-2xl"
                    >
                      &times;
                    </button>
                  )}
                  {errors.name && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative flex flex-col mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="shadow rounded-lg appearance-none border py-2 px-3 leading-tight focus:outline-none focus:border-black text-gray-700 focus:shadow-outline"
                  />
                  {watch("email") && (
                    <button
                      type="button"
                      onClick={() => resetField("email")}
                      className="absolute right-3 top-7 text-gray-500 text-2xl"
                    >
                      &times;
                    </button>
                  )}
                  {errors.email && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>

                {/* Mobile Number Field */}
                <div className="relative flex flex-col mb-4">
                  <label htmlFor="mobileNumber" className="block text-gray-700">
                    Whatsapp No.
                  </label>
                  <input
                    {...register("mobileNumber", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                    type="number"
                    name="mobileNumber"
                    id="mobileNumber"
                    placeholder="Enter your mobile"
                    className="shadow rounded-lg appearance-none border py-2 px-3 leading-tight focus:outline-none focus:border-black text-gray-700 focus:shadow-outline"
                  />
                  {watch("mobileNumber") && (
                    <button
                      type="button"
                      onClick={() => resetField("mobileNumber")}
                      className="absolute right-3 top-7 text-gray-500 text-2xl"
                    >
                      &times;
                    </button>
                  )}
                  {errors.mobileNumber && (
                    <span className="text-red-600">
                      This field is required, please enter a 10-digit number
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative flex flex-col mb-4">
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: true, minLength: 2 })}
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="shadow rounded-lg appearance-none border py-2 px-3 leading-tight focus:outline-none focus:border-black text-gray-700 focus:shadow-outline"
                  />
                  {watch("message") && (
                    <button
                      type="button"
                      onClick={() => resetField("message")}
                      className="absolute right-3 top-7 text-gray-500 text-2xl"
                    >
                      &times;
                    </button>
                  )}
                  {errors.message && (
                    <span className="text-red-600">
                      This field is required, please enter more than 2
                      characters
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? "Sent" : "Send"}
                </button>
              </form>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-24 mt-8 p-4 md:mt-12 flex flex-col shadow rounded-xl justify-center text-center items-center">
            <h2 className="text-sm md:text-2xl font-semibold mb-4">
              Join Dhan - Best in Class Investing & Trading Platform for India
            </h2>
            <div>
              <a
                href="https://join.dhan.co/?invite=ISBFL19966"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 md:text-3xl text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </>
  );
};
export default Contact;
