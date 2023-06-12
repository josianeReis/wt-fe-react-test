export const getMovies = async () => {
  return fetch('/movies.json').then((response) => response.json());
}