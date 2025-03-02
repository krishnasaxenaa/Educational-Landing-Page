import React from "react";
import Linkedin from "../assets/Images/Linkedin.svg";
import Facebook from "../assets/Images/Facebook.svg";
import Instagram from "../assets/Images/Instagram.svg";
import WhatsApp from "../assets/Images/WhatsApp.svg";
import Twitter from "../assets/Images/Twitter.svg";
import YouTube from "../assets/Images/YouTube.svg";

function Contact() {
  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <section className="w-full">
      <div className="w-full max-w-[1250px] mx-auto  mt-8 p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          {/* Left Section */}
          <div className="space-y-6 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Do you have any doubts to discuss?
            </h1>
            <h2 className="text-xl text-gray-800">Get in touch with us</h2>

            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Contact</h3>
                <p className="text-gray-800">developer.info@gmail.com</p>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Social Media
                </h3>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://www.linkedin.com"
                    aria-label="LinkedIn"
                    className="hover:opacity-75 transition-opacity"
                  >
                    <img src={Linkedin} alt="LinkedIn" className="w-6" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    aria-label="Facebook"
                    className="hover:opacity-75 transition-opacity"
                  >
                    <img src={Facebook} alt="Facebook" className="w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    aria-label="Instagram"
                    className="hover:opacity-75 transition-opacity"
                  >
                    <img src={Instagram} alt="Instagram" className="w-6" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=1234567890"
                    aria-label="WhatsApp"
                    className="hover:opacity-75 transition-opacity"
                  >
                    <img src={WhatsApp} alt="WhatsApp" className="w-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    aria-label="Twitter"
                    className="hover:opacity-75 transition-opacity"
                  >
                    <img src={Twitter} alt="Twitter" className="w-6" />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    aria-label="YouTube"
                    className="hover:opacity-75 transition-opacity"
                  >
                    <img src={YouTube} alt="YouTube" className="w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
