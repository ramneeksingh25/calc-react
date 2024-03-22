/* eslint-disable react/prop-types */

function Header({expression,inp}) {
  return (
        <div className='header h-[40%] w-full text-[20px] flex flex-col items-center justify-between'>
            <h1 className={`text-zinc-300/40 relative -left-[50%] translate-x-7 mt-2 ml-2 hover:text-zinc-900 cursor-pointer`}>Calc.</h1>
            <div className="input relative h-[60%]  w-[85%] mb-[2%]">
            {/* input bar */}
            <div className="inputtext flex flex-col w-[100%] h-[100%] gap-2 mt-[20px]">
                <span className='text-white/85 text-xl h-[30%] text-right'>
                    {expression}
                </span>
                <span className='text-white/85 text-5xl text-right'>
                    {inp}
                </span>
            </div>
            </div>
        </div>
  )
}

  

export default Header