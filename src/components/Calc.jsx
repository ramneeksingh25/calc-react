/* eslint-disable react/prop-types */
import { useState } from "react"
import Header from "./Header";
import Controls from "./Controls";

function Calc() {
    const [expression,setExpression]=useState("");
    const [input,setInput]=useState("0");
  return (
    <div className="calc-container h-[600px] min-w-[400px]  backdrop-blur-lg absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center text-zinc-700 dark:text-white rounded-2xl overflow-hidden shadow-lg shadow-gray-700 transition
    bg-zinc-200/40 dark:bg-zinc-800/40">
        <Header expression={expression} inp={input}/>
        <Controls exp={setExpression} inputF={setInput} input={input}/>
    </div>
  )
}

export default Calc