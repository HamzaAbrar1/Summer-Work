import React, { useEffect, useState } from "react";

export default function Imageslider() {
  const [result, setResult] = useState([]);

  const [src, setSrc] = useState(null);
  const [count, setCount] = useState(0);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    setResult(data.products);
    setSrc(data.products[count].images[0]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const leftSlider = () => {
   
    setSrc(result[count].images[0]);
    if (count === 0) {
      setCount(result.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const rightSlider = () => {
    console.log(count);
    setSrc(result[count].images[0]);
    if (count === result.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    // console.log(count);
  };
  return (
    <div>
      just an image slider
      <br />
      {
        <div>
          {/* {
        result.map((item)=>(
            <div>
                <img src={item.images[0]} alt={item.title} style={{height:'150px'}} />
             </div>   
        ))
        } */}

          <img src={src} alt="" style={{ height: "150px" }} />
          <button
            onClick={() => {
              leftSlider();
            }}

            className=" bg-orange-500 rounded-2xl w-20 hover:bg-orange-400 hover:w-24 hover:transition-all"
          >
            leftSlider
          </button>
          <div className="w-10 inline" ></div>
          <button
            onClick={() => {
              rightSlider();
            }}
            className=" bg-orange-500 rounded-2xl w-20 hover:bg-orange-400 hover:w-24 hover:transition-all"
          >
            rightSlider
          </button>
        </div>
      }
    </div>
  );
}
