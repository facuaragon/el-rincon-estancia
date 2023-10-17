"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  "Nosotros",
  "Habitaciones",
  "Galeria",
  "Actividades",
  "Contacto",
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function scrollToElement(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });
    }
  }
  return (
    <>
      <nav className=" bg-gray-500 fixed top-0 w-full">
        <div className="mx-auto flex justify-between items-center px-4 py-2">
          <Link
            href="#nosotros"
            onClick={(e) => {
              scrollToElement(e);
              setMenuOpen(false);
            }}
          >
            El Rincon
          </Link>
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className="hidden lg:flex gap-6 list-none">
            {links.map((link) => (
              <li className=" p-2" key={link}>
                <Link href={`#${link.toLowerCase()}`} onClick={scrollToElement}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <ul
        className={`lg:hidden list-none ${
          menuOpen
            ? "h-screen w-full bg-gray-500 px-4 fixed top-[56px] left-0"
            : "hidden"
        }`}
      >
        {links.map((link) => (
          <li className="py-2" key={link}>
            <Link
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                scrollToElement(e);
                setMenuOpen(false);
              }}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
