function movies() {
    const movies = [
        {
            name: "The Dark Knight",
            rating: 9.0,
            genre: "Action"
        },
        {
            name: "Avengers: Endgame",
            rating: 8.9,
            genre: "Action"
        },
        {
            name: "The Shawshank Redemption",
            rating: 9.3,
            genre: "Drama"
        },
        {
            name: "The Lord of the Rings: The Return of the King",
            rating: 8.9,
            genre: "Fantasy"
        }
    ];
    // returing highest rated movie
    let maxrate = 0;
    let ratedmovie = {};
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].rating > maxrate) {
            maxrate = movies[i].rating;
            ratedmovie = {
                name: movies[i].name,
                rating: movies[i].rating,
                genre: movies[i].genre
            }
        }
    }
    return ratedmovie;
}

console.log(movies());
