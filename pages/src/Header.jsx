import React, { useState } from "react";
import Logo from "../assets/Logo.jpg";
import Menu from "../assets/Menu.svg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModeOpen, setIsLoginModeOpen] = useState(false);
  const [isSignUpModeOpen, setIsSignUpModeOpen] = useState(false);

  const navObj = [
    { name: "Home", url: "./" },
    { name: "Courses", url: "./courses" },
    { name: "About Us", url: "./aboutus" },
    { name: "Contact", url: "./contact" },
    { name: "Enroll Now", url: "./enrollnow" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeModals = () => {
    setIsLoginModeOpen(false);
    setIsSignUpModeOpen(false);
  };

  return (
    <section>
      <nav className="w-full md:max-w-[1250px] mx-auto flex p-2 flex-wrap justify-between items-center shadow sticky transition-all">
        <div className="flex flex-wrap justify-center items-center md:justify-between mix-blend-multiply">
          <a
            className="flex flex-col md:flex-row mb-8 md:m-0 justify-center items-center text-blue-500 hover:text-blue-800"
            href="#"
          >
            <img
              src={Logo}
              alt="Company Logo"
              className="w-[200px] md:w-[80px] rounded-4xl"
            />
            <h1>Educational Hub</h1>
          </a>
        </div>
        <div className="md:block hidden">
          <ul className="flex space-x-8 font-medium">
            {navObj.map((item, index) => (
              <li key={index}>
                <a className="hover:text-orange-600" href={item.url}>
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button
                className="hover:text-orange-600"
                onClick={() => setIsLoginModeOpen(true)}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className="hover:text-orange-600"
                onClick={() => setIsSignUpModeOpen(true)}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <button onClick={toggleMobileMenu} className="md:hidden">
          <img src={Menu} alt="Menu" className="w-[64px] mr-8" />
        </button>

        {isLoginModeOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
              <h2>Login</h2>
              <button className="mt-4" onClick={closeModals}>
                Close
              </button>
            </div>
          </div>
        )}

        {isSignUpModeOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
              <h2>Sign Up</h2>
              <button className="mt-4" onClick={closeModals}>
                Close
              </button>
            </div>
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="md:hidden w-full mt-4">
            <ul className="flex flex-col space-y-4 font-medium text-2xl bg-orange-300 text-center">
              {navObj.map((item, index) => (
                <li className="hover:text-orange-200" key={index}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
              <li>
                <button
                  className="hover:text-orange-200"
                  onClick={() => setIsLoginModeOpen(true)}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="hover:text-orange-200"
                  onClick={() => setIsSignUpModeOpen(true)}
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
}

export default Header;
