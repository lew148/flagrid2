import React from 'react';

const FlagIcon = ({ name, flag, handleClick }) => (
    <button
        className="flag-container align-self-center btn btn-light"
        onClick={handleClick}
    >
        <img
            className="flag-icon img-thumbnail"
            src={flag}
            alt={name}
        />
    </button>
);

export default FlagIcon;