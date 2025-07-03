// ThemeContext.jsx
import React, { createContext, useMemo, useState, useContext } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export const useCustomTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark'); // default to dark mode

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = useMemo(() => {
    const isDark = mode === 'dark';
    return createTheme({
      palette: {
        mode,
        background: {
          default: isDark ? '#000000' : '#F9F2EA',
          paper: isDark ? '#000000' : '#F9F2EA',
        },
        text: {
          primary: isDark ? '#FFFFFF' : '#000000',
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            html: {
              backgroundColor: isDark ? '#000000' : '#F9F2EA',
            },
            body: {
              backgroundColor: isDark ? '#000000' : '#F9F2EA',
              color: isDark ? '#FFFFFF' : '#000000',
            },
            '#root': {
              backgroundColor: isDark ? '#000000' : '#F9F2EA',
              color: isDark ? '#FFFFFF' : '#000000',
            },
          },
        },
      },
    });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
