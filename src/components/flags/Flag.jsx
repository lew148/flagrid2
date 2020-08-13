import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import FlagIcon from './FlagIcon';
import FlagInfo from './FlagInfo';

const Flag = ({ country }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleFlagClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <FlagIcon
                name={country.name}
                flag={country.flag}
                handleClick={handleFlagClick}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <FlagInfo
                    name={country.name}
                    capital={country.capital}
                    currencies={country.currencies}
                    population={country.population}
                    isoCode={country.alpha3Code}
                    languages={country.languages}
                />
            </Popover>
        </>
    );
};

export default Flag;