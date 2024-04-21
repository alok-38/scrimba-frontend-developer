document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imageContainer');
    const imageURLs = [
        './images/hip1.jpg',
        './images/hip2.jpg',
        './images/hip3.jpg'
    ];
    // Create and append circular images to the container
    imageURLs.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Image ${index + 1}`;
        imgElement.classList.add('circularImage');

        // Add click event listener for interactivity
        imgElement.addEventListener('click', function() {
            alert(`Clicked on Image ${index + 1}`);
        });
        imageContainer.appendChild(imgElement);
    });
});