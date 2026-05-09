let showCourses = document.querySelector("#show-courses");

let courses = [
  {
    name: "English",
    instructor: "Sama",
    grade: "2",
    description: "This is beginner",
    image: "./images/english.jpg",
  },

  {
    name: "Math",
    instructor: "Suma",
    grade: "9",
    description: "This is beginner",
    image: "./images/math.jpg",
  },

  {
    name: "Biology",
    instructor: "Najwa",
    grade: "4",
    description: "This is beginner",
    image: "./images/biology.jpg",
  },

  {
    name: "Dari",
    instructor: "Marhaba",
    grade: "5",
    description: "This is beginner",
    image: "./images/dari.jpg",
  },
];

function showAllCourses() {
  showCourses.innerHTML = "";

  courses.forEach((course) => {
    showCourses.innerHTML += `
      <div class="courses-card">
        <img src="${course.image}" width="100" />
        <p><strong>Subject:</strong> ${course.name}</p>
        <p><strong>Grade:</strong> ${course.grade}</p>
        <button 
        class="showMoreInfo"
        data-image='${course.image}'
        data-name="${course.name}"
        data-instructor="${course.instructor}"
        data-grade="${course.grade}"
        data-description="${course.description}">
        Show more info
        </button>
      </div>
    `;
  });
}

let showInfo = document.querySelector("#show-detail-course");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("showMoreInfo")) {
    let image = e.target.dataset.image;
    let name = e.target.dataset.name;
    let instructor = e.target.dataset.instructor;
    let grade = e.target.dataset.grade;
    let description = e.target.dataset.description;

    showInfo.innerHTML = `
    <div class='more-info'>
      <img src = '${image}' width= '100px'/>
      <h2>Subject: ${name}</h2>
      <p>Instructor: ${instructor}</p>
      <p>Grade: ${grade}</p>
      <p>Description: ${description}</p>
      <button class='close-details' id="close-details">❌ Close</button>
    </div>
    `;

    document.addEventListener("click", function (e) {
      if (e.target.id === "close-details") {
        showInfo.innerHTML = "";
      }
    });
  }
});

showAllCourses();

// Add new course

let enterName = document.querySelector("#enter-course-name");
let instructorName = document.querySelector("#enter-instructor-name");
let enterGrade = document.querySelector("#enter-grade");
let enterImage = document.querySelector("#enter-image");
let enterDescription = document.querySelector("#enter-description");
let enterButton = document.querySelector("#submit-new-info");

enterButton.addEventListener("click", function (event) {
  event.preventDefault();

  let newCourse = {
    name: enterName.value.trim(),
    instructor: instructorName.value.trim(),
    grade: enterGrade.value.trim(),
    image: enterImage.value.trim(),
    description: enterDescription.value.trim(),
  };

  if (
    newCourse.name === "" ||
    newCourse.instructor === "" ||
    newCourse.grade === "" ||
    newCourse.image === "" ||
    newCourse.description === ""
  ) {
    alert("Please fill all fields");
    return;
  }
  // Push the new course
  courses.push(newCourse);

  showAllCourses();

  enterName.value = "";
  instructorName.value = "";
  enterGrade.value = "";
  enterImage.value = "";
  enterDescription.value = "";

  alert("New course added successfully!");
});

// Filter the courses
let filterButtons = document.querySelectorAll("#filter-section button");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let selectedGrade = button.dataset.grade;
    if (selectedGrade === "All") {
      showAllCourses();
      return;
    }
    let filteredCourses = courses.filter((course) => {
      return course.grade === selectedGrade;
    });

    showCourses.innerHTML = "";

    filteredCourses.forEach((course) => {
      showCourses.innerHTML += `
        <div class="courses-card">
          <img src="${course.image}" width="100" />
          <p><strong>Subject:</strong> ${course.name}</p>
          <p><strong>Grade:</strong> ${course.grade}</p>

          <button 
            class="showMoreInfo"
            data-image="${course.image}"
            data-name="${course.name}"
            data-instructor="${course.instructor}"
            data-grade="${course.grade}"
            data-description="${course.description}">
            Show more info
          </button>
        </div>
      `;
    });
  });
});
