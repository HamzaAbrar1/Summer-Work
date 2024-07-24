import React, { useState } from "react";

export default function Accordion() {
  let data = [
    {
      question: "What is the capital of France?",
      answer: "The capital of France is Paris.",
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "The largest planet in our solar system is Jupiter.",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answer: "Harper Lee wrote 'To Kill a Mockingbird'.",
    },
    {
      question: "What is the boiling point of water?",
      answer:
        "The boiling point of water is 100°C (212°F) at standard atmospheric pressure.",
    },
    {
      question: "What is the chemical symbol for gold?",
      answer: "The chemical symbol for gold is Au.",
    },
  ];
  const [select, setSelect] = useState(null);
  const [enableMult, setEnableMult] = useState(false);

  const [multValue, SetMultValues] = useState([]);
  const handler = (val) => {
    // e.preventDefault();
    setSelect(val === select ? null : val);
  };

  const handler2 = (val) => {
    let indexFinder = multValue.indexOf(val);
    console.log(indexFinder)
    if (indexFinder === -1) {
      SetMultValues([...multValue, val]);
    } 
    else {
      
SetMultValues((prev)=>{
     let  newArr12=[...prev];
newArr12.splice(indexFinder,1)
 
return newArr12;
    });      
    //   SetMultValues(cpyValues);
    }
  };
  return (
    <div className="flex-col bg-slate-800">
      <button
        onClick={(e) => {
          e.preventDefault();
          setEnableMult(!enableMult);
   
        }}
        className=" font-bold"
      >
        Enable multiple
      </button>

      {data.map((item, index) => (
        <div>
          <div className="font-extrabold text-white">{item.question}</div>

          <div
            onClick={(e) => {
              e.preventDefault();
              {
                enableMult ? handler2(index) : handler(index);
              }
            }}
            className=" cursor-pointer text-white"
            >
            +
          </div>

          {enableMult ? 
            multValue.indexOf(index) != -1 ? 
              <div className="text-white"> {item.answer} </div>
             : null
           : select === index ? 
            <div className="text-white"> {item.answer} </div>
           : null}
        </div>
      ))}
    </div>
  );
}
