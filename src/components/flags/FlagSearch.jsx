import React, { useState } from 'react'
import _ from 'lodash'
import { Search } from 'semantic-ui-react'

const FlagSearch = ({ allCountries, setFilteredCountries }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('');

    const handleSearchChange = (e, { value }) => {
        setIsLoading(true);
        setValue(value);

        console.log(value);

        setTimeout(() => {
            if (value.length < 1) {
                setIsLoading(false);
                setFilteredCountries(undefined)
                setValue('');
                return;
            }

            const regEx = new RegExp(value, 'i')
            const isMatch = (country) => regEx.test(country.name) || regEx.test(country.alpha3Code)

            setIsLoading(false);
            setFilteredCountries(_.filter(allCountries, isMatch));
        }, 300);
    }

    return (
        <Search
            loading={isLoading}
            onSearchChange={_.debounce(handleSearchChange, 500, {
                leading: true,
            })}
            value={value}
            open={false}
        />
    );
};

export default FlagSearch;