import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
const Contact = () => {
  //emailjs.init("gbWrenUBBiXn5a2OG");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
  const response = await fetch("/.netlify/functions/sendEmail", {
    method: "POST",
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      mobileNumber: data.mobileNumber,
      message: data.message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    toast.success(
      "Thank you for your message! I will get back to you shortly."
    );
  } else {
    toast.error(
      "Sorry, couldn't submit your message! Please try again later."
    );
  }
};
    // try {
    //   //await axios.post("https://getform.io/f/bnlegjkb", userInfo);
    //   await fetch(
    //     `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${encodeURIComponent(
    //       message
    //     )}`
    //   );
    //   toast.success(
    //     "Thank you for your message! I will get back to you shortly."
    //   );
    // } catch (error) {
    //   console.error(error);
    //   toast.error(
    //     "Sorry couldn't submit your message! please try again later."
    //   );
    // }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span className="">Please fill out the form below to contact me</span>

        <div className="flex flex-col  justify-center mt-5">
          <form
            //action="https://getform.io/f/bnlegjkb"
            //method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-5 shadow 0 w-96 md:w-[600px] px-8 py-6 rounded-xl"
          >
            <h1 className="text-cl font-semibold mb-4 ">Send your message</h1>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="shadow rounded-lg appearance-none border py-2 px-3 leading-tight focus:outline-none  focus:border-black text-gray-700 focus:shadow-outline"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="shadow rounded-lg appearance-none border py-2 px-3 leading-tight focus:outline-none  focus:border-black text-gray-700 focus:shadow-outline"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="mobileNumber" className="block text-gray-700">
                Mobile No.
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
                placeholder="Enter your mobile number"
                className="shadow rounded-lg appearance-none border py-2 px-3 leading-tight focus:outline-none focus:border-black text-gray-700 focus:shadow-outline"
              />
              {errors.mobileNumber && (
                <span className="text-red-600">
                  This field is required please enter 10 digit number
                </span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                {...register("message", { required: true, minLength: 2 })}
                type="text"
                name="message"
                id="message"
                placeholder="Type your message here"
                className="shadow rounded-lg appearance-none border py-2 px-3 leading-tight  focus:border-black focus:outline-none text-gray-700 focus:shadow-outline"
              />
              {errors.message && (
                <span className="text-red-600">
                  This field is required, please enter more than 2 characters
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
        <hr className="mt-12" />
      </div>
    </>
  );
};
export default Contact;
