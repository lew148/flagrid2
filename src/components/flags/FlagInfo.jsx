import React from 'react';

const FlagInfo = ({ name, capital, currencies, population, isoCode, languages }) => (
    <div className="card">
        <div className="card-header">
            {name} <b>({isoCode})</b>
        </div>
        <div className="card-body">
            <h6 className="card-subtitle mb-2">Capital: {capital}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Population: {population}</h6>
            <hr />
            <h6>Languages</h6>
            <ul>
                {languages.map(l => (
                    <li>{l.name}</li>
                ))}
            </ul>
            <h6>Currencies</h6>
            <ul>
                {currencies.map(c => (
                    <li>{c.name} ({c.symbol})</li>
                ))}
            </ul>
        </div>
    </div>
);

export default FlagInfo;