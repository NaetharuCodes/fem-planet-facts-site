import React, { useState } from "react";
import { backgroundColorClassMap, BgColor } from "../helpers/styleClassMaps";

interface MenuItemProps {
  name: string;
  color: BgColor;
}

const MenuItem = ({ name, color }: MenuItemProps) => {
  const bgColorClass = backgroundColorClassMap[color];

  return (
    <a
      href={`./planet/${name}`}
      className="h-20 border-b border-darkGray flex items-center bg-black text-white font-spartan font-bold uppercase text-[15pt]"
    >
      <div className={`rounded-full ${bgColorClass} w-6 h-6 mx-8`} />
      <p>{name}</p>
    </a>
  );
};

interface BurgerMenuProps {
  menuItems: MenuItemProps[];
}

const BurgerMenu = ({ menuItems }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative md:hidden">
      {/* Burger Icon */}
      <button
        className="flex items-center px-3 py-2 rounded text-white md:hidden"
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
