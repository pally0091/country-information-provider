import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";

const Details = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div className="mt-12">
      <h1 className="mb-2 text-4xl font-extrabold">
        {details[0]?.name?.common}
      </h1>
      <div className=" my-2 w-[80%]  mx-auto border rounded-lg p-5 justify-between align-middle lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col">
        <div
          className="lg:w-1/3 sm:w-full"
          mx-auto
        >
          <img
            className="w-full h-full shadow-sm shadow-white"
            src={details[0].flags.png}
            alt={details[0].flags.alt}
          ></img>
        </div>
        <div className="lg:w-2/3 sm:w-full p-5 text-left">
          <h2 className="text-3xl font-semibold my-2">
            Official name : {details[0].name.official}
          </h2>
          <h3 className="text-2xl my-2">Region : {details[0].region}</h3>
          <h3 className="my-2 text-lg">Capital City : {details[0].capital}</h3>
          <p>Status : {details[0].status}</p>
        </div>
      </div>
      <div className="my-5 w-[80%] lg:h-80 sm:h-auto mx-auto border rounded-lg p-5 justify-between align-middle lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col">
        <div
          className="lg:w-1/3 sm:w-full h-64 bg-white"
          mx-auto
        >
          <img
            className="w-full h-full"
            src={details[0].coatOfArms.png}
            alt=""
          ></img>
          <p className="my-2">Coat Of Arms</p>
        </div>
        <div className="lg:w-2/3 sm:w-full mt-5 p-5 lg:px-24 sm:px-0 text-justify">
          <h5 className="text-lg font-bold">
            Location :{" "}
            <a
              className="text-red-300"
              href={details[0].maps.googleMaps}
              target="_blank"
            >
              Google Map
            </a>
          </h5>
          <p className="my-3">Time Zone : {details[0].timezones}</p>
          <p className="my-3">
            Population : <span className="text-red-500">{details[0].population}</span>
          </p>
          <p className="my-3">Week starts on : {details[0].startOfWeek}</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
