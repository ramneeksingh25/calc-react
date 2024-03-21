import Background from "./components/Background"
import Calculator from "./components/Calculator"
import Calc from "./components/Calc"
import { useRef } from "react"
function App() {
  const ref=useRef(null);
  return (
    <div className="h-screen w-full bg-zinc-900" ref={ref}>
      <Background reference={ref} />
      <Calc/>
    </div>
  )
}

export default App