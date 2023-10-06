export const backgroundColorClassMap = {
  trans: "bg-transparent",
  white: "bg-white",
  black: "bg-black",
  darkGray: "bg-dark",
  lightGray: "bg-lightGray",
  lightBlue: "bg-lightBlue",
  yellow: "bg-yellow",
  purple: "bg-purple",
  darkOrange: "bg-darkOrange",
  red: "bg-red",
  lightOrange: "bg-lightOrange",
  green: "bg-green",
  darkBlue: "bg-darkBlue",
};

export type BgColor = keyof typeof backgroundColorClassMap;

export const borderColorClassMap = {
  trans: "lg:hover:border-t-transparent",
  white: "lg:hover:border-t-white",
  black: "lg:hover:border-t-black",
  darkGray: "lg:hover:border-t-dark",
  lightGray: "lg:hover:border-t-lightGray",
  lightBlue: "lg:hover:border-t-lightBlue",
  yellow: "lg:hover:border-t-yellow",
  purple: "lg:hover:border-t-purple",
  darkOrange: "lg:hover:border-t-darkOrange",
  red: "lg:hover:border-t-red",
  lightOrange: "lg:hover:border-t-lightOrange",
  green: "lg:hover:border-t-green",
  darkBlue: "lg:hover:border-t-darkBlue",
};

export type BdColor = keyof typeof borderColorClassMap;
