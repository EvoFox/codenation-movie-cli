const Movie = require("./utils");
const input = process.argv;

const runtime = () => {
	if (input[2] === "add") {
		const movieObj = new Movie(input[3], input[4]);
		movieObj.add();
	} else if (input[2] === "exit") {
		console.log(Movie.print());
		process.exit();
	}

	runtime();
};

runtime();
