import { PropTypes } from "prop-types";

function Header({expression,input,output}) {
  return (
        <div className='header h-[40%] w-full text-[20px] flex flex-col items-center justify-between'>
            <h1 className={`text-zinc-300/40 relative -left-[50%] translate-x-7 mt-2 ml-2 hover:text-zinc-50 cursor-pointer`}>Calc.</h1>
            <div className="input relative h-[60%]  w-[85%] mb-[2%]">
            {/* input bar */}
            <div className="inputtext flex flex-col w-[100%] h-[100%] gap-2 mt-[20px]">
                <span className='text-white/85 text-xl h-[30%] text-right'>
                    {output?expression:""}
                </span>
                <span className='text-white/85 text-5xl text-right'>
                    {output?output:input}
                </span>
            </div>
            </div>
        </div>
  )
}

Header.propTypes = {
    expression: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
  };
  

export default Header