// Function to add a course to the array and update local storage
const addCourse = () => {
    const courseInput = document.getElementById('courseInput');
    const courseValue = courseInput.value.trim();

    if (courseValue !== '') {
      // Retrieve stored courses from local storage
      const storedCourses = JSON.parse(localStorage.getItem('myCourses')) || [];

      // Add the new course
      storedCourses.push(courseValue);

      // Update local storage
      localStorage.setItem('myCourses', JSON.stringify(storedCourses));

      courseInput.value = ''; // Clear the input field
    }
  };

  // Function to render the list from local storage to the DOM
  const renderList = () => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    // Retrieve stored courses from local storage
    const storedCourses = JSON.parse(localStorage.getItem('myCourses')) || [];

    const ulElement = document.createElement('ul');
    storedCourses.forEach(item => {
      const liElement = document.createElement('li');
      liElement.textContent = item;
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