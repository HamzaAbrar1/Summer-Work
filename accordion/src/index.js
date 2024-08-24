import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Colors from "./Colors";
import Stars from "./Stars";
// import Changetheme from "./Changetheme";
// import Imageslider from "./Imageslider";
// import Tabs from "./tabs";
// import Modal from "./Modal";
// import LoadContent from "./LoadContent";
// import Searchbox from "./Searchbox";
// import Login from "./Login";
// import Profile from "./Profile";
// import UserContextProvider from "./context/UserContextProvider";
// import Splash from "./Splash";
// import Practice from "./Practice";
// import Accordion from "./Accordion";
// import Forms from "./Forms";
// import TicTacToe from "./TicTacToe";
// import Landing from "./Landing";
// import Accordion1 from "./Accordion1.js";
import {Provider} from "react-redux"
import Store from "./Store/Store.js";
// import Showing from "./Showing.js";
import HexGenerator from "./HexGenerator.js";
import Stars1 from "./Stars1.js";
import ImageSlider1 from "./ImageSlider1.js";
import LoadContent1 from "./LoadContent1.js";

import TreeView from "./TreeView/TreeView.js";
import Data from "./TreeView/data.js";
import QrCodeGenerator from "./QrCodeGenerator.js";
import CustomTab from "./CustomTab.js";
import ModelPopup from "./ModelPopup.js";
import Scroll from "./Scroll.js";

import GitHubProfilefinder from "./GitHubProfilefinder.js";
const root = ReactDOM.createRoot(document.getElementById("root"));



const var1=` Manchester United, often referred to as "Man U" or simply "United," is one of the most iconic football clubs in the world. Founded in 1878 as Newton Heath LYR Football Club, it was renamed Manchester United in 1902. The club's rich history is filled with domestic and international success, including 20 English Premier League titles, which is a record in English football. United's home ground, Old Trafford, known as "The Theatre of Dreams," has witnessed countless memorable moments. Over the years, the club has cultivated a global fanbase, with millions of supporters across every continent, making it one of the most recognized and followed football teams worldwide.`
const var2=`
    Manchester United's legacy is deeply intertwined with the "Busby Babes," a generation of young players nurtured by legendary manager Sir Matt Busby. The tragic Munich air disaster in 1958, which claimed the lives of eight players, is a poignant chapter in the club's history. However, the team's resilience was exemplified when they rose from the ashes to win the European Cup a decade later in 1968, becoming the first English club to do so. The club continued its success under Sir Alex Ferguson, who managed the team from 1986 to 2013, leading them to numerous trophies, including two UEFA Champions League titles in 1999 and 2008. Ferguson's era is often regarded as the golden age of Manchester United, with the team dominating English football.
    `
    const var3=`In recent years, Manchester United has faced challenges in reclaiming its former glory, with a series of managerial changes and fluctuating performances. Despite this, the club remains a powerhouse, with significant financial clout, global sponsorships, and a squad brimming with talent. The ongoing rebuild under current management aims to restore United to its position at the pinnacle of English and European football. The club's commitment to youth development and attacking football continues to be a cornerstone of its philosophy. As the Red Devils strive to add to their trophy cabinet, the passionate support of their fans remains unwavering, driving the club forward in its pursuit of success.`
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
{/* <Accordion1/> */}
{/* <HexGenerator/> */}
{/* </HexGenerator> */}
{/* </Accordion1> */}
{/* </Showing> */}

{/* <Stars1/> */}
{/* </Stars1> */}
{/* <ImageSlider1/> */}
{/* <LoadContent1/> */}
 
 {/* <TreeView Data={Data}/> */}
 {/* </TreeView> */}

{/* <QrCodeGenerator/> */}
  {/* <CustomTab content1={var1 }
  content2={var2}
    content3={var3}
   */}
  {/* /> */}
  {/* </CustomTab> */}
  {/* <Scroll/> */}
    
  {/* </Scroll> */}
{/* </QrCodeGenerator> */}

{/* </LoadContent1> */}

{/* <ModelPopup/> */}
{/* </ModalPopup> */}
<GitHubProfilefinder/>

</Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
