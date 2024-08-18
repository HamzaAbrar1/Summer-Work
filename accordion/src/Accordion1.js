import React, { useState } from "react";

function Accordion1() {
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
  const [editIndex, setEdindex] = useState(null);

  const clicked = (currentIndex) => {
    setEdindex( (prev)=>(
        prev=== currentIndex? null :currentIndex
    ));
  };
  return (
    <>
      {data && data.length > 0
        ? data.map((item, index) => (
            <div className="wrapper">
              <h2>{item.question}</h2>
              <p
                onClick={() => {
                  clicked(index);
                }}
              className="cursor-pointer"
              >
                +
              </p>
              {editIndex === index ? <p>{item.answer}</p> : null}
            </div>
          ))
        : null}
    </>
  );
}

export default Accordion1;
