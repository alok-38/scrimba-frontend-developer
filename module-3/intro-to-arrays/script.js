document.addEventListener('DOMContentLoaded', function() {
    // Arrays - ordered lists of items

    let featuredPosts = [
        "Check out my Netflix clone",
        "Here's the code for my project",
        "I've just relaunched my portfolio"
    ];

    // Create an array that lists your i.e. experience, education, licenses, skills or similar
    // The items of the array should be strings
    let myAccomplishments = [
        "Coding",
        "Physics",
        "Fitness"
    ];

    // Function to display array items in a list
    function displayItems(array, elementId) {
        let ul = document.getElementById(elementId);
        array.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
    }
    // Display featured posts and accomplishments
    displayItems(featuredPosts, 'featured-posts');
    displayItems(myAccomplishments, 'my-accomplishments');
});




