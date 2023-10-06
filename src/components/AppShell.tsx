import React from "react";
import BurgerMenu from "./BurgerMenu";

const AppShell = () => {
  return (
    <div className="h-screen flex flex-col bg-black">
      <header className="border-b border-darkGray h-[68px] flex justify-between items-center p-[24px] bg-black">
        <h1 className="font-antonio text-white text-[28px] line-[52px] uppercase">
          The Planets
        </h1>
        <BurgerMenu />
      </header>
    </div>
  );
};

export default AppShell;

// Header
// Children (flex grow)
