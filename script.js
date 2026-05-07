const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".ul-navbar");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// DOM selector
let name = document.querySelector("#name-input");
let age = document.querySelector("#age-input");
let grade = document.querySelector("#grade-input");
let enrollButton = document.querySelector("#enroll-button");
let result = document.querySelector("#result");
let allResult = document.querySelector("#all-result");
let students = JSON.parse(localStorage.getItem("students")) || [];

// Display students function
function displayStudents() {
  allResult.innerHTML = "";

  students.forEach((student, index) => {
    allResult.innerHTML += `
      <div class="student-card">
        <h3>Student ${index + 1}</h3>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Grade:</strong> ${student.grade}</p>
        <button class="delete-btn" data-index="${index}">Delete</button>
        <button class="edit-btn" data-index="${index}">Edit</button>
        </div>
    `;
  });
}

// Check condition and Show the welcome message
let editIndex = null;

enrollButton.addEventListener("click", function (event) {
  event.preventDefault;
  let student = {
    name: name.value,
    age: age.value,
    grade: grade.value,
  };

  if (
    student.name === "" ||
    student.age === "" ||
    isNaN(student.age) ||
    student.grade === "" ||
    student.grade > 12
  ) {
    alert("Please fill the form correctly!");
  } else {
    // If edit mode
    if (editIndex !== null) {
      students[editIndex] = student;
      editIndex = null;
    }
    // If new student
    else {
      students.push(student);
    }

    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();

    result.innerHTML = `Welcome ${student.name} to Bright Future School 🎉`;

    name.value = "";
    age.value = "";
    grade.value = "";
  }
});

allResult.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    let index = e.target.dataset.index;
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
  }

  if (e.target.classList.contains("edit-btn")) {
    let index = Number(e.target.dataset.index);

    editIndex = index;

    let student = students[index];

    name.value = student.name;
    age.value = student.age;
    grade.value = student.grade;
  }
});
