import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// Pages
import Home from './routes/Home';
import Tarefas from './routes/Tarefas';
import Sobre from './routes/Sobre';


import './index.css';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "/tasks",
        element: <Tarefas/>
      },
      {
        path: "/about",
        element: <Sobre/>
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
