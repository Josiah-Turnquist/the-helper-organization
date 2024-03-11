import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "typeface-bayon";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight

// Theme
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

// Pages
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/home-page";
import "typeface-bayon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeProvider theme={theme}>
        <HomePage theme={theme}/>
      </ThemeProvider>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bugs",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
