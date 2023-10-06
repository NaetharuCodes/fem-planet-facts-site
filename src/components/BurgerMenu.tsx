import React, { useState } from "react";

interface MenuItemProps {
  name: string;
  color: string;
}

const MenuItem = ({ name, color }: MenuItemProps) => {
  return (
    <a
      href={`./planet/${name}`}
      className="h-20 border-b border-darkGray flex items-center bg-black text-white font-spartan font-bold uppercase text-[15pt]"
    >
      <div className={`rounded-full ${color} w-6 h-6 mx-8`} />
      <p>{name}</p>
    </a>
  );
};

const menuItems = [
  { name: "mercury", color: "bg-white" },
  { name: "venus", color: "bg-yellow" },
  { name: "earth", color: "bg-darkBlue" },
  { name: "mars", color: "bg-red" },
  { name: "jupiter", color: "bg-lightOrange" },
  { name: "saturn", color: "bg-yellow" },
  { name: "uranus", color: "bg-green" },
  { name: "neptune", color: "bg-lightBlue" },
];

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      {/* Burger Icon */}
      <button
        className="flex items-center px-3 py-2 rounded text-white  lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="fixed left-0 top-[68px] w-screen bg-white">
          {menuItems.map((item) => (
            <MenuItem key={item.name} name={item.name} color={item.color} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
