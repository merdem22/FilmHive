const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; //read from .env file.

export const getMovies = async () => {
    try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch movies.");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};

export const getMovieById = async (movieId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${movieId}`);
        if (!response.ok) {
            throw new Error("Movie not found");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching movie with id ", error);
        return null;
    }
};