import React from 'react';
import logo from './logo.svg';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import {darkTheme} from "./themes";
import {AppRoutes} from "./routes";

function App() {
  return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
            <AppRoutes />
        </ThemeProvider>
      </StyledEngineProvider>
  );
}

export default App;
