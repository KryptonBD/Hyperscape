import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/vite.svg";
import { navItems } from "../constants";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"
      aria-label="Main Navigation"
    >
      <nav className="container px-4 mx-auto relative lg:text-sm">
        <section className="flex justify-between items-center">
          <a
            href="/"
            className="flex items-center flex-shrink-0"
            aria-label="Home"
          >
            <img className="h-10 w-10 mr-2" src={logo} alt="Hyperscape Logo" />
            <span className="text-xl tracking-tight">Hyperscape</span>
          </a>

          <ul className="hidden lg:flex ml-14 space-x-12" role="menu">
            {navItems.map((item, index) => (
              <li key={index} role="none">
                <a href={item.href} role="menuitem" className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <section className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md"
              aria-label="Sign In"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              aria-label="Create an account"
            >
              Create an account
            </a>
          </section>

          <section className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} aria-label="Toggle Navigation Menu">
              {mobileMenuOpen ? (
                <X aria-hidden="true" />
              ) : (
                <Menu aria-hidden="true" />
              )}
            </button>
          </section>
        </section>

        {mobileMenuOpen && (
          <section
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden"
            role="menu"
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4" role="none">
                  <a
                    href={item.href}
                    role="menuitem"
                    className="hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <section className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 border rounded-md"
                aria-label="Sign In"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                aria-label="Create an account"
              >
                Create an account
              </a>
            </section>
          </section>
        )}
      </nav>
    </header>
  );
};
