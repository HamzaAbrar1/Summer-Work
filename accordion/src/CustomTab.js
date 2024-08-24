import React, { useState } from "react";

export default function CustomTab({ content1, content2, content3 }) {
  const [content, setContent] = useState(content1);

  return (
    <>
      <div className="flex justify-center items-center space-x-2 my-4">
        <button
          type="button"
          className="bg-red-800 px-4 py-2 text-white  h-32 w-32 rounded-full"
          onClick={() => setContent(content1)}
        >
          Tab1
        </button>
        <button
          type="button"
          className="bg-blue-800 px-4 py-2 text-white h-32 w-32 rounded-full"
          onClick={() => setContent(content2)}
        >
          Tab2
        </button>

        <button
          type="button"
          className="bg-yellow-700 px-4 py-2 text-white h-32 w-32 rounded-full"
          onClick={() => setContent(content3)}
        >
          Tab3
        </button>
      </div>

<div className="flex justify-center items-center py-10">
    <h2 className="font-black text-2xl">History of Manchester United</h2>
</div>
      <div className="font-serif font-bold flex justify-center items-center px-52">{content}</div>
    </>
  );
}
