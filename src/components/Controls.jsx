/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */

function Controls({exp,inputF,out,expression}) {
    function calculate(event){
        const clicked=event.target.textContent;
        switch (clicked) {
            case "AC":
                exp("0");
                inputF("0"); 
                out("");             
                break;
            case "back":
                inputF(input=>input.substring(0,input.length-1))
                break;
            
            case "=":
                const result = eval(expression);
                inputF(result.toFixed(5).replace(/0+$/, ""));
                break;
            
            case "%":
                const result2= eval(expression);
                inputF(result2/100);
                break;
            default:
                inputF(prev=>{ 
                    return(prev=="0"?clicked:prev+clicked)});
                break;
        }

    }
  return (
    <div className="controls h-[100%] w-full p-5 ">
            {/* buttons */}
            <div className="grid grid-cols-4 gap-2 h-[100%]">
                {[7,8,9,"+",4,5,6,'-',1,2,3,'*','.','0','%','/','back','AC','=']
                .map((item,index)=>{
                    return (
                        <div className={`bg-slate-800 rounded-xl flex items-center justify-center text-3xl shadow-white hover:shadow-2xl hover:bg-slate-900 ${item==='='&&"col-span-2"}`} key={index} onClick={calculate}>{item}</div>
                    )
                })}
            </div>
        </div>
  )
}


export default Controls