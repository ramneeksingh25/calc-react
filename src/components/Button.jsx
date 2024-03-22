/* eslint-disable react/prop-types */

function Button({ item, calculate }) {
	let buttonColor = "";
	switch (item) {
		case "AC":
			buttonColor =
				"bg-red-600 dark:bg-red-800 hover:bg-red-800 dark:hover:bg-red-900 text-zinc-100";
			break;
		case "DEL":
			buttonColor =
				"bg-red-600 dark:bg-red-800 hover:bg-red-800 dark:hover:bg-red-900 text-zinc-100";
			break;
		case "=":
			buttonColor =
				"bg-zinc-500/80 dark:bg-zinc-800/50 col-span-2 shadow-white dark:hover:bg-zinc-900 hover:bg-zinc-800 hover:text-white";
			break;
		default:
			buttonColor =
				"bg-amber-500/80 dark:bg-amber-700/80 hover:bg-amber-600 dark:hover:bg-amber-900"
			break;
	}
	if(Number.isInteger(parseInt(item))){
		console.log(item);
		buttonColor="bg-zinc-300/70 dark:bg-zinc-800/40 shadow-white hover:bg-zinc-400 dark:hover:bg-black/50 ";
	}
	return (
		<div
			className={`relative overflow-hidden z-0 h-[100%] w-[95%] rounded-[1.5rem] text-3xl cursor-pointer flex items-center justify-center font-semibold hover:shadow-2xl ${buttonColor}`}
			onClick={calculate}>
			<span className="">{item}</span>
		</div>
	);
}

export default Button;
