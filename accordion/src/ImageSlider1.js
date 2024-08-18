import React, { useEffect, useState } from "react";

export default function ImageSlider1() {
  const [data, setData] = useState(null);

  const method = async () => {
    try {
      const resp = await fetch("https://dummyjson.com/products");
      const finalresult = await resp.json();
      console.log(
        "the following is the final result as following",
        finalresult.products
      );
      setData(finalresult.products);
    } catch (e) {
      console.log(e);
    }
  };
  const [count, setCount] = useState(0);
  useEffect(() => {
    method();
  }, []);

  return (
    <div>
      <div>
        <button className="bg-blue-800 rounded-md" 
        onClick={()=>{
            setCount((prev)=>(
prev==0?data.length-1:prev-1
            ))
        }}>Left</button>
        {data && data.length > 0 ? (
          <img src={data[count].images[0]} className="h-28" alt="" />
        ) : null}

        <button
          className="bg-blue-700 rounded-md"
          onClick={() => {
            setCount((previous) => {
              if (previous + 1 >= data.length) {
                return 0;
              }
              return previous + 1;
            });
          }}
        >
          right
        </button>
      </div>
    </div>
  );
}
