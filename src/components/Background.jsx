function Background() {
  return (
    <div className="absolute z-0 w-[100%] h-screen flex">
    <div className='z-[0] w-[50%] h-screen flex justify-center items-center bg-gradient-to-r from-slate-200 to-zinc-500'></div>
        {/* <span className='text-[15vw] text-zinc-700 hover:text-zinc-800 tracking-tighter'>
        Calc.
        </span> */}
        <div className="z-[0] w-[50%] h-screen flex justify-center items-center bg-gradient-to-r from-zinc-500 to-zinc-700/90">
          {/* <img src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg" alt="" /> */}
        </div>
    </div>
  )
}

export default Background