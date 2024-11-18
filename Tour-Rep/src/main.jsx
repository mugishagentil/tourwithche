// src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import About from './assets/About-Us/AboutUs.jsx'  
import Destin from './assets/Destins/Destin.jsx'
import Contact from './assets/Contact/Contact.jsx'
import Enquiry from './assets/Enquiry/Enquiry.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/destination',
    element: <Destin />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/enquiry',
    element: <Enquiry  />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
