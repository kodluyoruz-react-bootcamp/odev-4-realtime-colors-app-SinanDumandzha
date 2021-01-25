import React, { createContext, useState, useEffect } from 'react';

const BgColorContext = createContext();

const localStorageColor = localStorage.getItem('bgColor') || '#dad1bf';

export const ColorContextProvider = ({ children }) => {
    const [newBgColor, setNewBgColor] = useState(localStorageColor);

    const values = {
        newBgColor,
        setNewBgColor
    };

    useEffect(() => {
        setNewBgColor(newBgColor);
        localStorage.setItem('bgColor', newBgColor);
    }, [newBgColor])

    return (
        <BgColorContext.Provider value={values}>
            {children}
        </BgColorContext.Provider>
    );
};

export default BgColorContext;
