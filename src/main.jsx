import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import User from './Components/User.jsx';
import Admin from './Components/Admin.jsx';
import Owner from './Components/Owner.jsx';
import { createBrowserRouter,RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/owner",
    element: <Owner />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
