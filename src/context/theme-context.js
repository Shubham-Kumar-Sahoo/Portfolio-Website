import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from './themeReducer';

export const ThemeContext= createContext();

const initialThemeState= JSON.parse(localStorage.getItem('themeSettings')) || {background: 'bg-1'}

export const ThemeProvider= ({children}) => {
    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);

    const themeHandler = (buttonClassName) => {
        dispatchTheme({type: buttonClassName});
    }

    useEffect(() => {
        localStorage.setItem('themeSettings', JSON.stringify(themeState));
    }, [themeState]);
    

    return <ThemeContext.Provider value={{themeState, themeHandler}}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}