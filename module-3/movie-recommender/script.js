// Movie data (for simplicity, you can extend this with more movies and genres)
const movies = {
    action: ['Die Hard', 'Mad Max', 'The Dark Knight'],
    comedy: ['Superbad', 'Anchorman', 'Dumb and Dumber'],
    drama: ['The Shawshank Redemption', 'Forrest Gump', 'The Godfather'],
    'sci-fi': ['Blade Runner', 'The Matrix', 'Interstellar']
};

// Event listener for the recommendation button
const RecommendBtnEl = document.getElementById('RecommendBtn');

// Function to recommend a movie based on the selected genre
function recommendMovie() {
    const selectedGenre = document.getElementById('genre').value;
    const recommendationElement = document.getElementById('recommendation');

    if (movies[selectedGenre]) {
        const randomIndex = Math.floor(Math.random() * movies[selectedGenre].length);
    }
}
