const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '3fc46e8a';

export interface Movie{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

    async function searchMovies(query: string) {
    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching data from OMDB API:', error);
        throw error;
    }
    }
export default searchMovies;
