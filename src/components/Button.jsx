/* eslint-disable react/prop-types */

function Button({ item, calculate }) {
	let classString = "";
	switch (item) {
		case "AC":
			classString =
				"bg-red-800 hover:bg-red-900";
			break;
		case "DEL":
			classString =
				"bg-red-800 hover:bg-red-900";
			break;
        case "=":
            classString="bg-zinc-700 col-span-2 shadow-white hover:bg-zinc-900";
            break;
		default:
			classString =
				"bg-zinc-700/40 shadow-white hover:bg-zinc-900";
			break;
	}
	return (
		<div
			className={"relative z-0 rounded-3xl text-3xl flex items-center justify-center font-semibold hover:shadow-2xl "+ " "+ classString}
			onClick={calculate}>
                
                 {item}
		</div>
	);
}

export default Button;
