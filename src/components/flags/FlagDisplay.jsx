import React, { useState, useEffect } from 'react';
import Flag from 'components/flags/Flag';
import FlagSearch from 'components/flags/FlagSearch';
import { getAllCountries } from 'apiHelper';
import 'styling/flag.css'

const mapCountriesToFlags = (countries) => countries.map(c => <Flag country={c} />);

const FlagDisplay = () => {
    const [allCountries, setAllCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(undefined);

    useEffect(() => {
        getAllCountries()
            .then((data) => {
                setAllCountries(data);
            });
    });

    return (<>
        <div>
            <FlagSearch
                allCountries={allCountries}
                setFilteredCountries={setFilteredCountries}
            />
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {
                filteredCountries !== undefined
                ? mapCountriesToFlags(filteredCountries)
                : mapCountriesToFlags(allCountries)
            }
        </div>
    </>)
};

export default FlagDisplay;