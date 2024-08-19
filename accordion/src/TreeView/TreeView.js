import React, { useState } from "react";

export default function TreeView({ Data = [] }) {
const [state,setState]=useState(false)
const method1=()=>{
setState(!state);
}
    return (
    <div>
      <h1 className=" inline mr-3">{Data.name}</h1>
      {Data.children && Data.children.length>0? <div
      onClick={()=>{
        method1()
      }} className="cursor-pointer inline" >+</div>:null }
      <br />
    {state ?  Data.children
        ? Data.children.map((elem) => (
            <div>
              <div>{elem.name} </div>

              {elem.children && elem.children.length > 0 ? (
                <div>
                  <TreeView Data={elem} />
                </div>
              ) : null}
            </div>
          ))
        : null:null }
    </div>
  );
}
