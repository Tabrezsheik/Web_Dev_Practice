const movies = [
  { title: 'The Shawshank Redemption', year: 1994 ,rating: 93},
  { title: 'The Pursuit of Happyness', year: 2006 ,rating: 80},
  { title: 'The Dark Knight', year: 2008 ,rating: 90},

];

const movieTitles = movies.map(movie => movie.title);
const movieRatings = movies.map(movie => movie.rating / 10);
console.log('MOVIE TITLES AND RATINGS\n'); 
for (let i = 0; i < movieRatings.length; i++) {
console.log(`${movieTitles[i]}: ${movieRatings[i]}`);
} // Output: [9.3, 8.0, 9.0]