import React from "react";
import Card from "./Card";
import {
  FaAngleLeft,
  FaAngleRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

import { useState } from "react";

const Testinomial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random()* reviews.length);
    setIndex(randomIndex);
  }

  return (

    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all  rounded-md
    duration-700 hover:shadow-xl">
     <Card review={reviews[index]}></Card>
            
      <div className="flex text-3xl mt-9 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={leftShiftHandler}
          className=" curson-pointer hover:text-violet-600"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className=" curson-pointer hover:text-violet-600"
        >
          <FaAngleRight />
        </button>
      </div>
      <div className=" mt-6">
        <button
          onClick={surpriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2
        rounded-md font-bold text-white"
        >
          surprise me
        </button>
      </div>
    </div>
  );
};

export default Testinomial;
