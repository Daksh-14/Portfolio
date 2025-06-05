import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Timeline", path: "/timeline" },
  ];

  return (
    <nav className="shadow-md sticky top-0 z-50 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Daksh.dev</h1>
        <ul className="flex space-x-6 text-gray-100">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-blue-500 font-medium ${
                  location.pathname === path ? 'text-blue-400' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
