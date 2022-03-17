import { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { dark, light } from '../theme/theme';
import { ResetCSS } from '../styles/globals';

export const themes = {
    dark: 'dark',
    light: 'light'
}

const ThemeContext = createContext({ themeType: themes.dark, setThemeType: theme => {}});

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
    const [storage, setStorage] = useLocalStorage("theme", themes.dark);
    const [themeType, setThemeType] = useState(storage);
    const [theme, setTheme] = useState(dark);

    useEffect(() => {
        setStorage(themeType);
        setTheme(themeType === themes.dark ? dark : light);
    }, [themeType, setStorage]);

    return (
        <ThemeContext.Provider value={{ themeType, setThemeType }}>
            <StyledProvider theme={theme}>
                <ResetCSS />
                { children }
            </StyledProvider>
        </ThemeContext.Provider>
    )
}
