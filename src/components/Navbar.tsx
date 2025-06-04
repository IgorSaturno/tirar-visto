import { useState } from "react";
import tirarVisto from "../assets/logo-nav.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "#", label: "Home" },
    { href: "#", label: "Quem somos" },
    { href: "#", label: "Serviços" },
    { href: "#", label: "Contato" },
  ];

  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-5 px-4 md:px-0">
        <a href="#" className="flex items-center space-x-2">
          <img src={tirarVisto} alt="Tirar Visto Logo" className="h-8 w-auto" />
        </a>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>

        <nav className="hidden md:flex space-x-6 text-gray-900 text-sm md:text-base">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:font-bold transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-1 px-4 py-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="block py-2 text-gray-900 hover:bg-gray-100 rounded-md transition"
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
