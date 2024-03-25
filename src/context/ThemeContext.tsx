import React from 'react';

interface ThemeContextProps {
    toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({ toggleTheme: () => { } });
