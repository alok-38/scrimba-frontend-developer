// Array to store courses
const myCourses = [];

// Function to add a course to the array
const addCourse = () => {
    const courseInput = document.getElementById('courseInput');
    const courseItem = courseInput.value.trim();

    if (courseItem !== '') {
        myCourses.push(courseItem);
        courseInput.value = '';
    }
};

// Function to render the list to the DOM
const renderList = () => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    const ulElement = document.createElement('ul');
    myCourses.forEach(course => {
        const liElement = document.createElement('li');
        liElement.textContent = course;
        ulElement.appendChild(liElement);
    });
    outputDiv.appendChild(ulElement);
};

// Event listener to add a course on button click
const addCourseBtn = document.getElementById('addCourseBtn');
addCourseBtn.addEventListener('click', addCourse);

// Event listener to render the list on button click
const renderBtn = document.getElementById('renderBtn');
renderBtn.addEventListener('click', renderList);