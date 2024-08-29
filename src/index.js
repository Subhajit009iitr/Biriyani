import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, alpha } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const theme = createTheme({
  spacing: (factor) => `${0.4 * factor}rem`,
  palette: {
    primary: {
      main: "#0DBDF2",
      light: "#39C9F9",
      nav: alpha("#071116", 0.6),
    },
    background: {
      main: "#071116",
      default: "#0A1B25",
      light: "#2333B",
      lightest: "#3B4951",
      highlight: "6C767C"
    }
  },
  typography: {
    htmlFontSize: 10,
    allVariants: { 
      color: "#39C9F9",
    },
    h2: {
      fontSize: "3.2rem"
    },
    h3: {
      fontSize: "2.6rem"
    },
    h4: {
      fontSize: "2.4rem"
    },
    h5: {
      fontSize: "2.2rem"
    },
    h6: {
      fontSize: "2rem"
    },
    body1: {
      fontSize: "1.8rem"
    },
    body2: {
      fontSize: "1.6rem"
    },
    small1: {
      fontSize: "1.4rem"
    },
    small2: {
      fontSize: "1.2rem"
    },
    button: {
      fontSize: "2.4rem",
      fontWeight: 500,
      textTransform: "none",
      on: "#FFFFFF",
      off: alpha("#FFFFFF",0.8)
    }
  }
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
