const movies = [
  { title: 'Inception', rating: 8.8, year: 2010 },
  { title: 'The Matrix', rating: 8.7, year: 1999 }
];

function findMovieByRating(minRating) {
  return movies.filter(movie => movie.rating >= minRating);
}

console.log(findMovieByRating(8.7));