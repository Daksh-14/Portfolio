import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Timeline", path: "/timeline" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="shadow-md sticky top-0 z-50 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Daksh.dev</h1>

        <ul className="hidden md:flex space-x-6 text-gray-100">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-blue-500 text-xl font-medium ${
                  location.pathname === path ? "text-blue-400" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-900 text-white">
          <ul className="space-y-2">
            {navItems.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block py-1 text-lg hover:text-blue-500 ${
                    location.pathname === path ? "text-blue-400" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
