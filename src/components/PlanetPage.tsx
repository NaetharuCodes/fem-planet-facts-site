import React, { useEffect, useState } from "react";
import { views } from "../helpers/enums";
import planetMars from "./../assets/planet-mars.svg";
import { BgColor, backgroundColorClassMap } from "../helpers/styleClassMaps";
import { useParams } from "react-router-dom";
import Button from "./Button";

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
  //
  const [view, setView] = useState<views>(views.OVERVIEW);
  const [planet, setPlanet] = useState<Planet | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Grabs the current page's planet name used for the API fetch
  const { planetName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5275/api/planets/${planetName}`)
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
  }, [planetName]);

  if (!planet) return <div>Loading...</div>;

  return (
    <div className="text-white bg-black flex flex-col justify-between items-center min-h-full mx-10 flex-1">
      <ul className="flex md:hidden">
        <Button name="overview" onClick={() => setView(views.OVERVIEW)} />
        <Button name="structure" onClick={() => setView(views.STRUCTURE)} />
        <Button name="surface" onClick={() => setView(views.SURFACE)} />
      </ul>
      <img src={planetMars} alt="planet" className="my-20 w-40" />
      <div className="sm:flex w-full">
        <div className="md:w-1/2">
          <h2 className="uppercase text-[40pt] font-antonio text-center md:text-left">
            {planet.name}
          </h2>
          <p className="font-spartan text-[10pt] mt-10 white text-center md:text-left">
            {planet.description}
          </p>
          <div className="my-10 text-center md:text-left">
            Source: <a href="#">Wikipedia</a>
          </div>
        </div>
        <ul className="hidden md:flex flex-col w-1/2 items-center justify-center flex-1 pl-10">
          <Button name="overview" onClick={() => setView(views.OVERVIEW)} />
          <Button name="structure" onClick={() => setView(views.STRUCTURE)} />
          <Button name="surface" onClick={() => setView(views.SURFACE)} />
        </ul>
      </div>
      <div className="w-full md:flex mb-6">
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
