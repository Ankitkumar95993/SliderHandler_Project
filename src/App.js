import React from "react";
import Testinomial from "./Components/Testinomial";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-slate-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testonomials</h1>
        <div className="h-[4px] w-1/5 mt-1 mx-auto bg-violet-400"></div>
        <Testinomial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
