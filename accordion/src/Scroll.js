import React, { useEffect, useState } from "react";

export default function Scroll() {
  const [data, setData] = useState(null);
  const method = async () => {
    const resp = await fetch(`https://dummyjson.com/products?limit=30`);
    const finalres = await resp.json();

    setData(finalres.products);
    console.log(finalres.products);
};

  useEffect(() => {
    method();
  }, []);

  return <div>

{data ? 
data.map(

(elem)=>(

    <div>
    <div>{elem.title} </div>
<br />
</div>
)

)

:null}


  </div>;
}
