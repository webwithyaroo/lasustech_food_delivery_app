import React from "react";

const FooterSection = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-6 dark:bg-white dark:text-black    bg-primary text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* About / Logo */}
        <div className="md:w-1/3">
          <h2 className="md:text-3xl text-2xl font-semibold text-secondary mb-4 font-inter">
            Foodqoe.{" "}
          </h2>
          <p className="text-gray-400 font-montserrat">
            Bringing passion to your plate since day one. Fresh ingredients,
            unforgettable flavors.
          </p>
          <p className="mt-6 text-gray-500 text-sm font-montserrat">
            &copy; {new Date().getFullYear()} webwithyaroo . All rights
            reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-white dark:text-black mb-4 font-inter">
            Quick Links
          </h3>
          <ul className="space-y-2 font-montserrat">
            <li>
              <a href="#about" className="hover:text-accent transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-accent transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-white mb-4 font-inter">
            Follow Us
          </h3>
          <div className="flex space-x-6 text-gray-400">
            <a
              href="https://github.com/webwithyaroo/"
              aria-label="Facebook"
              className="hover:text-accent transition">
              {/* Facebook SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/Issa-soliu"
              aria-label="Twitter"
              className="hover:text-accent transition">
              {/* Twitter SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.98-2.48 9.12 9.12 0 0 1-2.9 1.1 4.48 4.48 0 0 0-7.64 4.09A12.73 12.73 0 0 1 2 4.15a4.48 4.48 0 0 0 1.39 6 4.41 4.41 0 0 1-2.03-.56v.06a4.48 4.48 0 0 0 3.6 4.4 4.52 4.52 0 0 1-2.02.08 4.48 4.48 0 0 0 4.18 3.12A9 9 0 0 1 2 19.54 12.73 12.73 0 0 0 8.29 21c7.54 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.35 8.35 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="https://issa-dev.vercel.app"
              aria-label="Instagram"
              className="hover:text-accent transition">
              {/* Instagram SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm8.54 2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-start  font-inter mt-16  ">
            @webwithyaroo ----------
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
