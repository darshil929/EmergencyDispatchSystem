import React from 'react';

interface ThemeContextProps {
    toggleTheme: () => any;
}

export const ThemeContext = React.createContext<ThemeContextProps>({ toggleTheme: () => { } });
