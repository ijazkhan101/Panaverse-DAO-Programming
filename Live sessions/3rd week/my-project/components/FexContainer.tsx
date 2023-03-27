import React from "react";

export default function FexContainer() {
  return (
    <div className="flex bg-pink-200 p-4 m-4 rounded shadow-xl gap-x-4" >
      <div className="basis-1/3   bg-white m-4 rounded-md shadow-sm p-8 ">
        <h1 className="font-black text-lg">Standard</h1>
        <h2>Monthly</h2>
        <h1 className="font-black text-3xl mt-4">25$</h1>
      </div>
      <div className="basis-1/3 p-8 bg-pink-600 rounded-md text-white m-4 shadow-sm">
        <h1 className="font-black text-lg">Standard</h1>
        <h2>Monthly</h2>
        <h1 className="font-black text-3xl mt-4 ">25$</h1>
      </div>
      <div className="basis-1/3 p-8 bg-white rounded-md m-4 shadow-sm">
        <h1 className="font-black text-lg">Standard</h1>
        <h2>Monthly</h2>
        <h1 className="font-black text-3xl mt-4">25$</h1>
      </div>
    </div>
  );
}
