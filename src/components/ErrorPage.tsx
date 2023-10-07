import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-black h-screen text-white font-spartan font-bold text-[40pt]">
      <h1>404, something went wrong and you got lost in deep space...</h1>
      <a href="/" className="text-yellow hover:text-darkOrange">
        Take me home
      </a>
    </div>
  );
};

export default ErrorPage;
