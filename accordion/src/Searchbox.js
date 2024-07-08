import React, { useEffect, useState } from "react";

export default function Searchbox() {
  const [allData, setAllData] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [clickedValue,setclickedValue]=useState("");
  const [filterdata, setFilterData] = useState([]);
  const clicked = (e) => {
    console.log("clicked", e.target.innerText);
    setSearchValue(e.target.innerText);
    setFilterData([]);
};

  const fetchData = async () => {
    let res = await fetch("https://dummyjson.com/products?limit=10&skip=10");
    let fin = await res.json();
    console.log(fin.products);
    let name = fin.products.map((item) => item.title);
    console.log(name);
    setAllData(name);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleValue = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.length > 1) {
      let filteredData = allData.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      );

      setFilterData(filteredData);

      console.log(filteredData);
    }
  };

  return (
    <div>
      just content to check the fin request
      {/* {allData && allData.length>1? 
                allData.map((item,index)=>(
                    <div>
                      the name is following of {index +1}  {item} 
                     </div>   
                )
            )
:null

} */}
      <input type="text" value={searchValue} onChange={handleValue} />
      <div>
        {searchValue.length > 1 ? (
          <div>
            {filterdata
              ? filterdata.map((item) => (
                  <div onClick={clicked}> 
                  {item}
                  </div>
                ))
              : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
