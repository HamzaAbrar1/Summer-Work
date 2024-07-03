import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const qaArray = [
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      id: 2,
      question: "What is 2 + 2?",
      answer: "4",
    },
    {
      id: 3,
      question: "Who wrote 'To Kill a Mockingbird'?",
      answer: "Harper Lee",
    },
    {
      id: 4,
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
    },
    {
      id: 5,
      question: "What is the boiling point of water?",
      answer: "100°C or 212°F",
    },
  ];

  // console.log(qaArray);

const [multipe,setMultiple]=useState(false);

const [enableMult,setEnableMult]=useState([]);


  const [enable, setEnable] = useState(null);

  const handleClick = (id) => {
    console.log("clicked on inside the single", id);
    if (enable == id) {
      setEnable(null);
    } else {
      setEnable(id);
    }
  };
  const handleMultiple=(id)=>{
    console.log("clicked on inside the multiple ", id);
    let val=enableMult
    if(val.includes(id)){
      let index=val.indexOf(id);
      val.splice(index,1);
    }
    else{
      val.push(id);
setEnableMult(val);    
    }
  }

  return (
    <div className="App">

        <button onClick={
          ()=>{
          setMultiple(!multipe);
          }
        }> enable Multiple</button>
      {qaArray.map((elem) => (
        <div id={elem.id}>
          <h1>{elem.question}</h1>
          <p
            className="chichi"
            onClick={() => {
              {
                multipe ? handleMultiple (elem.id):handleClick(elem.id);
              }  
              // handleClick(elem.id);
            }}
          >
            +
          </p>
          {
            multipe && enableMult.includes(elem.id)?  <p>
            <b>{elem.answer}</b>
          </p>:
          <div></div>
          }
          {elem.id == enable && (
            <div>
              <p>
                <b>{elem.answer}</b>
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
