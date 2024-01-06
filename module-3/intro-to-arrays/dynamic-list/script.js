document.addEventListener('DOMContentLoaded', function () {
    let featuredPosts = [];
    let myAccomplishments = [];

    function displayItems(array, elementId) {
        let ul = document.getElementById(elementId);
        ul.innerHTML = ''; // Clear the existing list before re-rendering

        array.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
    }

    function addFeaturedPost() {
        let input = document.getElementById('featured-input');
        let post = input.value.trim();

        if (post !== '') {
            featuredPosts.push(post);
            displayItems(featuredPosts, 'featured-posts');
            input.value = ''; // Clear the input field
        }
    }

    function addAccomplishment() {
        let input = document.getElementById('accomplishments-input');
        let accomplishment = input.value.trim();

        if (accomplishment !== '') {
            myAccomplishments.push(accomplishment);
            displayItems(myAccomplishments, 'my-accomplishments');
            input.value = ''; // Clear the input field
        }
    }

    const featuredPostBtnEl = document.getElementById("featuredPostBtn");
    featuredPostBtnEl.addEventListener('click', addFeaturedPost);

    const myAccomplishmentsBtnEl = document.getElementById("myAccomplishmentsBtn");
    myAccomplishmentsBtnEl.addEventListener('click', addAccomplishment);

    // Display initial items
    displayItems(featuredPosts, 'featured-posts');
    displayItems(myAccomplishments, 'my-accomplishments');
});
