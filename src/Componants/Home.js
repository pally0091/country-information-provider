import React, { useEffect, useState } from 'react';
import Country from './Country';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then( data => setCountries(data))
    },[])
    return (
      <div className=" mt-20">
        <h1 className="my-5 text-xl font-bold">
          There is <span className='text-red-600 font-extrabold'>{countries.length}</span> countries in the World
        </h1>
        <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col flex-wrap mx-10 justify-between">
          {countries.map((country) => (
            <Country
              key={country.ccn3}
              country={country}
            ></Country>
          ))}
        </div>
      </div>
    );
};

export default Home;