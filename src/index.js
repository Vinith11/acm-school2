import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Admission from "./screens/Admission";
import Events from "./screens/Events";
import Faculty from "./screens/Faculty";
import Home from "./screens/Home";
import Gallery from './screens/Gallery';
import Contactus from './screens/Contactus';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="admission" element={<Admission />} />
      <Route path="events" element={<Events />} />
      <Route path="faculty" element={<Faculty />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contactus />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
