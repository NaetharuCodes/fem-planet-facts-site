import React from "react";
import BurgerMenu from "./BurgerMenu";
import {
  BgColor,
  backgroundColorClassMap,
  BdColor,
  borderColorClassMap,
} from "../helpers/styleClassMaps";
import { Link } from "react-router-dom";

interface planetListType {
  name: string;
  color: BgColor;
}

const planetList: planetListType[] = [
  { name: "mercury", color: "white" },
  { name: "venus", color: "yellow" },
  { name: "earth", color: "darkBlue" },
  { name: "mars", color: "red" },
  { name: "jupiter", color: "lightOrange" },
  { name: "saturn", color: "yellow" },
  { name: "uranus", color: "green" },
  { name: "neptune", color: "lightBlue" },
];

interface PlanetBarProps {
  planetList: { name: string; color: BdColor }[];
}

const PlanetBar = ({ planetList }: PlanetBarProps) => {
  return (
    <div className="hidden md:flex text-white md:py-6 lg:py-0 h-full font-antonio uppercase">
      {planetList.map((planet) => {
        const bdColorClass = borderColorClassMap[planet.color];

        return (
          <div
            key={planet.name}
            className={`border-t-4 border-trans ${bdColorClass} h-full flex items-center w-24 justify-center`}
          >
            <Link to={`/planets/${planet.name}`} className="text-white mx-7">
              {planet.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="h-screen flex flex-col bg-black">
      <header className="border-b border-darkGray min-h-[68px] flex flex-row md:flex-col lg:flex-row justify-between items-center px-[24px] bg-black">
        <h1 className="font-antonio text-white text-[28px] line-[52px] uppercase">
          The Planets
        </h1>
        <PlanetBar planetList={planetList} />
        <BurgerMenu menuItems={planetList} />
      </header>
      {children}
    </div>
  );
};

export default AppShell;

// Header
// Children (flex grow)
