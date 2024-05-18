import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6pk8fxb",
        "template_bv3wlnn",
        form.current,
        "1TKI4DMTZmAhLehs5"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className=" py-8 lg:py-16 px-4">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
        Wanna reach out to me?
      </h2>
      <h2 className="mb-8 lg:mb-16 text-2xl font-bold text-center text-gray-900 ">
        Feel free to do that
      </h2>

      <div className="lg:w-1/2 mx-auto">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-8 border-2 p-10 border-black shadow-lg shadow-gray-500"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@gmail.com"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
            />
          </div>
          <div>
            <label
              htmlFor="Name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your Name
            </label>
            <input
              type="text"
              id="Name"
              name="name"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
            />
          </div>
          <div>
            <label
              htmlFor="Last Name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your Last Name
            </label>
            <input
              type="text"
              id="Last-Name"
              name="last-name"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5    "
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Let us know how I can help you"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5     "
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              placeholder="Leave a Message..."
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5    "
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
