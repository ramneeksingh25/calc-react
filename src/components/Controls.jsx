/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */

import Button from "./Button";

function Controls({ inputF, input, exp }) {
	function calculate(event) {
		const clicked = event.target.textContent;
		switch (clicked) {
			case "AC":
				inputF("0");
				exp("")
				break;
			case "DEL":
				inputF((input) => input.substring(0, input.length - 1));
				break;

			case "=":
				exp(input);
				const lastchar = input.substring(input.length - 1);
				console.log(lastchar);
				if (lastchar === "+" || lastchar === "-" || lastchar === "*" || lastchar === "/"){
					exp("Can't evaluate with operator at the end");
				} else {
					exp(input);
					let result = eval(input);
					if (!Number.isInteger(result)) {
						result = result.toFixed(5).replace(/0+$/, "");
					}
					console.log(result);
					inputF(result);
				}
				break;

			case "%":
				const result2 = eval(input);
				inputF(result2 / 100);
				break;
			default:
				inputF((prev) => {
					return prev == "0" ? clicked : prev + clicked;
				});
				break;
		}
	}
	return (
		<div className="controls h-[100%] w-full p-5 ">
			{/* buttons */}
			<div className="grid grid-cols-4 gap-2 h-[100%]">
				{[
					7,
					8,
					9,
					"+",
					4,
					5,
					6,
					"-",
					1,
					2,
					3,
					"*",
					".",
					"0",
					"%",
					"/",
					"DEL",
					"AC",
					"=",
				].map((item, index) => {
					return (
						// <div className={`bg-slate-800 rounded-xl flex items-center justify-center text-3xl shadow-white hover:shadow-2xl hover:bg-slate-900 ${item==='='&&"col-span-2"}`} key={index} onClick={calculate}>{item}</div>
							<Button
								key={index}
								item={item}
								calculate={calculate}
							/>
					);
				})}
			</div>
		</div>
	);
}

export default Controls;
