import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import About from "./About";
import Contact,{loadfunc} from "./Contact";
// import     from "react-router-dom";
import ApiContextProvider from "./Context/ApiContextProvider";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
const router1 = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" loader={loadfunc} element={<Contact/>}/>

  </Route>)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiContextProvider>

   
   <RouterProvider router={router1} />
   </ApiContextProvider>
    {/* </React.StrictMode></RouterProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
