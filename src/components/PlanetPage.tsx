import React, { useEffect, useState } from "react";
import { views } from "../helpers/enums";
import planetMars from "./../assets/planet-mars.svg";
import { BgColor, backgroundColorClassMap } from "../helpers/styleClassMaps";

interface MenuBtnProps {
  name: string;
  onClick: () => void;
  color: BgColor;
}

// Models/Planet.cs
export type Planet = {
  id: number;
  name: string;
  description: string;
  rotationTime: number;
  radius: number;
  revolutionTime: number;
  temperature: number;
};

const MenuBtn = ({ name, onClick, color }: MenuBtnProps) => {
  const buttonBackgroundColor = backgroundColorClassMap[color];

  return (
    <li
      className={`h-full flex items-center sm:w-full sm:justify-center border border-lightGray m-2 sm:h-12 ${buttonBackgroundColor}`}
    >
      <button
        className="w-[100px] h-10 uppercase sm:border-l-lightGray"
        onClick={onClick}
      >
        {name}
      </button>
    </li>
  );
};

interface InfoBoxProps {
  label: string;
  number: number;
  units: string;
}

const InfoBox = ({ label, number, units }: InfoBoxProps) => {
  return (
    <div className="border-lightGray border-[1px] m-1 my-4 flex-1 w-full flex justify-between items-center p-4 sm:flex-col sm:justify-start sm:items-start">
      <p className="font-spartan uppercase text-[8pt]">{label}</p>
      <p className="font-antonio text-[20pt]">
        {number} {units}
      </p>
    </div>
  );
};

const PlanetPage = () => {
  const [view, setView] = useState<views>(views.OVERVIEW);
  const [planet, setPlanet] = useState<Planet | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5275/api/planets/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlanet(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [view]);

  console.log("PLANET: ", planet);
  console.log("PLANET NAME: ", planet?.name);

  if (!planet) return <div>Loading...</div>;

  return (
    <div className="text-white bg-black flex flex-col items-center min-h-full mx-10">
      <ul className="flex justify-between items-center w-screen px-10 border-b border-darkGray bg-black h-14 sm:hidden">
        <MenuBtn
          color={"darkOrange"}
          name="overview"
          onClick={() => setView(views.OVERVIEW)}
        />
        <MenuBtn
          color={"darkOrange"}
          name="structure"
          onClick={() => setView(views.STRUCTURE)}
        />
        <MenuBtn
          color={"darkOrange"}
          name="surface"
          onClick={() => setView(views.SURFACE)}
        />
      </ul>
      <img src={planetMars} alt="planet" className="my-20 w-40" />
      <div className="sm:flex">
        <div className="sm:w-1/2">
          <h2 className="uppercase text-[40pt] font-antonio ">{planet.name}</h2>
          <p className="font-spartan text-[10pt] text-center mt-10 white sm:text-start">
            {planet.description}
          </p>
          <div className="my-10">
            Source: <a href="#">Wikipedia</a>
          </div>
        </div>
        <ul className="hidden sm:flex flex-col width-1/2 items-center justify-center flex-1 pl-10">
          <MenuBtn
            color={"darkOrange"}
            name="overview"
            onClick={() => setView(views.OVERVIEW)}
          />
          <MenuBtn
            color={"darkOrange"}
            name="structure"
            onClick={() => setView(views.STRUCTURE)}
          />
          <MenuBtn
            color={"darkOrange"}
            name="surface"
            onClick={() => setView(views.SURFACE)}
          />
        </ul>
      </div>
      <div className="w-full sm:flex">
        <InfoBox
          label="rotation time"
          number={planet.rotationTime}
          units="days"
        />
        <InfoBox
          label="revolution time"
          number={planet.revolutionTime}
          units="days"
        />
        <InfoBox label="radius" number={planet.radius} units="KM" />
        <InfoBox label="average temp." number={planet.temperature} units="C" />
      </div>
    </div>
  );
};

export default PlanetPage;
