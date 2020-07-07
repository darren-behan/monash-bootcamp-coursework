// Write a function that takes in a number and returns the corresponding day of the week

function result(x) {
  var days = [undefined, "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[x];
}

function result(input) {
	// 	Monday = 0
	// 	requirement: Monday = 1
	var days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday"
	];

	return days[input - 1];
}

function way2(input) {
	switch (input) {
		// equivalent to if (input === 1)
		case 1:
		case 2: {
			console.log("Breakday");
			break;
		}
		case 3: {
			console.log("Wednesday");
			break;
		}
		default: {
			console.log("This is not a proper input");
		}
	}
}