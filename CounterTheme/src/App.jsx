import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black")
  return (
    <div className={`w-screen h-screen text-amber-300 ${color === "black" ? "bg-black" : "bg-white"} flex justify-center items-center flex-col`}>
      <h1 className="flex justify-center p-3"> {count}</h1>
      <div className="flex gap-2">
        <button className="px-5 py-3 rounded-2xl bg-red-900 active:scale-95"
        onClick={()=>{
          setCount(count+1)
          console.log(count);
          

        }}>
          Increase
        </button>
        <button className="px-5 py-3 rounded-2xl bg-red-900 active:scale-95"
        onClick={()=>{
          setCount(count-1);
          console.log(count);
          
        }}
        >
          Decrease
        </button>
      </div>

        <div className=" flex gap-3 justify-center p-4">
          <button className="px-5 py-3 bg-red-950 rounded-2xl active:scale-95 "
          
          onClick={()=>{
            setColor("black")
          }}
          >
            
            
            Balck</button>
          <button className="px-5 py-3 bg-red-950 rounded-2xl active:scale-95 "
          onClick={()=>{
            setColor("white")
          }}
          >White</button>
        </div>


    </div>
    
  );
};

export default App;
