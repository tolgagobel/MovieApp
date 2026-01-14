//https://www.omdbapi.com/?i=tt3896198&apikey=3fc46e8a&s=recep
const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '3fc46e8a';

export type Movie = {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Type: string;
};

async function fetchMoviesBySearch(searchTerm: string) {
    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        return data;}
    catch (error) {
        console.error('Error fetching movies:', error);
    throw error;
    }
}
export { fetchMoviesBySearch };
