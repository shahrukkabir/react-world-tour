import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'black' : 'white' }}>Name : {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark As Visited</button>
            <br />
            <button className='mar' onClick={() => { handleVisitedFlags(country.flags.png) }}>Add Flag</button>
            <br />
            <button className='ma' onClick={handleVisited} >{visited ? 'Visited' : 'Going'}</button>
            <br />
            {visited ? ' I have Visited this Country' : 'I Want to Visit'}
        </div>
    );
};

export default Country;
