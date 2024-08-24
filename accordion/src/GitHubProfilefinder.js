import React, { useEffect, useState } from "react";

export default function GitHubProfilefinder() {
  const [username, setUsername] = useState("Hamza");
  const [result, setResult] = useState(null);
const [inital,setInit]=useState("")

  const method1 = async () => {
    const resp = await fetch(`https://api.github.com/users/${username}`);
    const finalresult = await resp.json();
    setResult(finalresult);
  };
  useEffect(() => {
    method1();
  }, [username]);

const method=()=>{

    setUsername(inital);
}

  return (
    <div>
      <input
        type="text"
        className="my-5 mx-5"
        name=""
        id=""
        onChange={(e)=>{
            setInit(e.target.value);
        }}
        placeholder="Enter the userName "
      />
      <button type="button" className="bg-blue-700 rounded-md py-3 px-3" onClick={()=>{
        method();
      }}>
        {" "}
        Find
      </button>

      {result ? (
        <div className="flex-col content-center items-center h-screen w-screen">
          <img
            src={result.avatar_url}
            alt=""
            className="h-24 w-24 rounded-full object-cover my-5"
          />
          <div className="name font-sans font-semibold my-5">{result.name}</div>

          <a
            href={result.html_url}
            target="_blank"
            rel=""
            className="font-bold text-lg"
          >
            Go To profile Page
          </a>
        </div>
      ) : null}
    </div>
  );
}
