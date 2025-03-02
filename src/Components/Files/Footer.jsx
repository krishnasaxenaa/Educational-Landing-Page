import React, { useState } from "react";

const links = [
  { name: "About Us", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Contact", href: "#" }
];

const resources = [
  { name: "FAQs", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" }
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <section className="mt-4 md:mt-8">
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <h2 className="text-xl font-bold mb-4">Educational Hub</h2>
            <p className="text-sm">
              Empowering learners with quality education and resources to shape
              a better future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-sm space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a href={resource.href} className="hover:text-blue-400">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full p-2 rounded-l-md text-gray-100"
              />
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="text-sm mt-2 text-blue-400">{message}</p>}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="hover:text-blue-400">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          &copy; 2025 Educational Hub. All rights reserved.
        </div>
      </footer>
    </section>
  );
}