const Movie = require("./utils");
const input = process.argv;

if (input[2] === "add") {
	const movieObj = new Movie(input[3], input[4]);
	movieObj.add();
} else if (input[2] === "add multi") {
	let num = parseInt(input[3]);
	let titleMod = 4;
	let actorMod = 5;
	for (i = 0; i < num; i++) {
		const movieObj = new Movie(input[i + titleMod], input[i + actorMod]);
		actorMod += 1;
		titleMod += 1;
        movieObj.add();
        
	}
}
