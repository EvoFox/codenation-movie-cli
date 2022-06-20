const yargs = require("yargs");
const Movie = require("./utils");

const app = () => {
	// Check if command given is "add"
	if (yargs.argv.command === "add") {
		// If so, a single movie should be added using the Movie constructor & function
		const movieObj = new Movie(yargs.argv.title, yargs.argv.actor);
		movieObj.add();
	}
	// Otherwise check if the command given is "addMulti"
	else if (yargs.argv.command === "addMulti") {
		// if so, loop over the titles
		for (i in yargs.argv.title) {
			// Check if the actor variable is provided, but NOT given a specific value (defaulting to True)
			if (yargs.argv.actor[i] === true) {
				// If so, create the movie using the Movie constructor, passing undefined as the actor variable
				const movieObj = new Movie(yargs.argv.title[i], undefined);
				movieObj.add();
			} else {
				// otherwise, create a movie using the Movie constructor and specifying the actor via yargs.argv.actor[i]
				const movieObj = new Movie(yargs.argv.title[i], yargs.argv.actor[i]);
				movieObj.add();
			}
		}
	}
};

app();
