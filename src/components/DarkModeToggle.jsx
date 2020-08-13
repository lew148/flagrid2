import React, {useState} from 'react';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    const handleDarkToggleClick = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('base-div-dark-mode');
    };

    return (
        <button 
            className={`align-self-center btn ${isDark ? 'btn-light' : 'btn-dark'}`}
            onClick={handleDarkToggleClick}        
        >
            {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;