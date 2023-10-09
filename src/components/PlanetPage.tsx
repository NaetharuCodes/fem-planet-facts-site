import React, { useState } from "react";
import { views } from "../helpers/enums";
import planetMars from "./../assets/planet-mars.svg";

interface MenuBtnProps {
  name: string;
  onClick: () => void;
}

const MenuBtn = ({ name, onClick }: MenuBtnProps) => {
  return (
    <li className="bg-black h-full flex items-center">
      <button className="w-[100px] h-10 uppercase" onClick={onClick}>
        {name}
      </button>
    </li>
  );
};

interface InfoBoxProps {
  label: string;
  number: string;
  units: string;
}

const InfoBox = ({ label, number, units }: InfoBoxProps) => {
  return (
    <div className="border-lightGray border-[1px] m-1 my-4 flex-1 w-full flex justify-between items-center p-4">
      <p className="font-spartan uppercase text-[8pt]">{label}</p>
      <p className="font-antonio text-[20pt]">
        {number} {units}
      </p>
    </div>
  );
};

const PlanetPage = () => {
  const [view, setView] = useState<views>(views.OVERVIEW);

  console.log(view);

  return (
    <div className="text-white bg-black flex flex-col items-center min-h-full mx-10">
      <ul className="flex justify-between items-center w-screen px-10 border-b border-darkGray bg-black h-14">
        <MenuBtn name="overview" onClick={() => setView(views.OVERVIEW)} />
        <MenuBtn name="structure" onClick={() => setView(views.STRUCTURE)} />
        <MenuBtn name="surface" onClick={() => setView(views.SURFACE)} />
      </ul>
      <img src={planetMars} alt="planet" className="my-20 w-40" />
      <h2 className="uppercase text-[40pt] font-antonio ">mars</h2>
      <p className="font-spartan text-[10pt] text-center mt-10 white">
        Mercury is the smallest planet in the Solar System and the closest to
        the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
        of all the Sun's planets. Mercury is one of four terrestrial planets in
        the Solar System, and is a rocky body like Earth.
      </p>
      <div className="my-10">
        Source: <a href="#">Wikipedia</a>
      </div>
      <div className="w-full">
        <InfoBox label="rotation time" number={"10"} units="days" />
        <InfoBox label="revolution time" number={"120"} units="days" />
        <InfoBox label="radius" number={"1000"} units="KM" />
        <InfoBox label="average temp." number={"109910123"} units="C" />
      </div>
    </div>
  );
};

export default PlanetPage;
