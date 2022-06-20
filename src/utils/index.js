const movieArr = [];

class Movie {
	constructor(title, actor = "Not Specified") {
		this.title = title;
		this.actor = actor;
	}
	add() {
		movieArr.push(this);
		console.log(movieArr);
	}
	print() {
		console.log(movieArr);
	}
}

module.exports = Movie;
