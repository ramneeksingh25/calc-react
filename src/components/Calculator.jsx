import { useState } from "react"

function Calculator() {
  const [input,setInput]=useState(0);
  const [expression,setExpression]=useState("");
  const [output,setOutput] = useState(0);

  return (
    <div className="text-white z-10 h-screen w-full flex items-center justify-center">
        <div className="h-[80vh] w-[35vw] border-[2px] rounded-2xl border-zinc-700 overflow-hidden">
            <div className="bg-zinc-200/20 h-[100%] w-full rounded-xl flex flex-col items-center backdrop-blur-lg">
              <div className=" relative input-bar w-[80%] h-[10%] bg-zinc-500 rounded-xl mt-10">
                <h1 className="absolute text-4xl top-1/2 -translate-y-[50%] px-3">
                  <span>
                    {expression}
                  </span>
                </h1>
              </div>
              <div className="buttons w-[80%] h-[70%] mt-10 rounded-xl grid grid-cols-4">
                <div className="numbers grid grid-cols-3 col-start-1 col-end-4">
                {[1,2,3,4,5,6,7,8,9].map((number,index)=>{
                  return (<div className="button bg-zinc-400 m-2 flex items-center justify-center text-6xl" key={index} onClick={(event)=>{
                    console.log(event.target.textContent);
                    const clicked=event.target.textContent;
                    setInput(prev=>prev+clicked);
                    setExpression(prev=>prev+clicked);
                  }}>
                    {number}
                  </div>)
                })}
                </div>
                <div className="operators h-[100%] flex flex-col justify-between">
                  {["+", "-","x","/"].map((item,index)=>{
                    return (<div className="button bg-zinc-400 m-2 p-2 flex items-center justify-center text-5xl" key={index} onClick={(event)=>{
                      const clicked=event.target.textContent;
                      setExpression(prev=>prev+clicked);
                      console.log(expression);
                    }}>{item}</div>)
                  })}
                  <div className="evaluators grid grid-rows-2 ">
                    {["C", "="].map((item,index)=>{
                      return (<div className={`${item} bg-red-500 m-2 p-2 flex items-center justify-center text-4xl`} key={index} onClick={(event)=>{
                        const clicked=event.target.textContent;
                        clicked=="="?console.log(expression):setExpression("");
                      }}>
                        {item}
                      </div>)
                    })
                  }
                  </div>                                  
                </div>
              </div>                         
            </div>
        </div>
    </div>
  )
}

export default Calculator