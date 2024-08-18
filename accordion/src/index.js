import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Colors from "./Colors";
import Stars from "./Stars";
import Changetheme from "./Changetheme";
import Imageslider from "./Imageslider";
import Tabs from "./tabs";
import Modal from "./Modal";
import LoadContent from "./LoadContent";
import Searchbox from "./Searchbox";
import Login from "./Login";
import Profile from "./Profile";
import UserContextProvider from "./context/UserContextProvider";
import Splash from "./Splash";
import Practice from "./Practice";
import Accordion from "./Accordion";
import Forms from "./Forms";
import TicTacToe from "./TicTacToe";
import Landing from "./Landing";
import Accordion1 from "./Accordion1.js";
import {Provider} from "react-redux"
import Store from "./Store/Store.js";
import Showing from "./Showing.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={Store}>


    {/* <App /> */}
    {/* <Colors  /> */}
    {/* <Stars /> */}
    {/* <Changetheme/> */}
{/* <TicTacToe/> */}
{/* </TicTacToe> */}


    {/* <Imageslider/> */}
    {/* <LoadContent/> */}
    {/* <Tabs/> */}
    {/* <Modal/> */}

    {/* <Searchbox/> */}
    {/* </Searchnox> */}

    {/* {value && <Splash/>}
{!value && <LoadContent/>} */}
{/* <Landing
/> */}
{/* </Landing> */}
    {/* <App/> */}
{/* 
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider> */}

{/* <Practice/> */}
{/* </Practice> */}
{/* <Forms/> */}
{/* </Forms> */}

{/* <Accordion/> */}
{/* </Accordion> */}


{/* <Showing/> */}
<Accordion1/>
{/* </Accordion1> */}
{/* </Showing> */}

</Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
