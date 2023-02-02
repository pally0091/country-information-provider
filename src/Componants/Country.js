import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const{flags, name, region} = props.country
    return (
      <div className="flex lg:w-[30%] md:w-[45%] sm:w-full border border-white rounded-lg my-2 p-1 align-middle justify-center shadow-md shadow-slate-300">
        <div className="w-[40%] h-24">
          <img
            className="w-full h-full"
            src={flags.png}
            alt=""
          ></img>
        </div>
        <div className="w-[60%]">
          <h3 className="text-base font-semibold">{name.common}</h3>
          <h4 className="">Region : {region}</h4>
          <button className='bg-sky-600 p-1 rounded-lg text-white hover:bg-sky-200 hover:text-black'><Link to={`/${name.common}`}> Details</Link> </button>
        </div>
      </div>
    );
};

export default Country;