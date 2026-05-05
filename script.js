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

// Dispaly students function
function displayStudents() {
  allResult.innerHTML = "";

  students.forEach((student, index) => {
    allResult.innerHTML += `
      <div class="student-card">
        <h3>Student ${index + 1}</h3>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Grade:</strong> ${student.grade}</p>
      </div>
    `;
  });
}

// show saved students on load
displayStudents();

enrollButton.addEventListener("click", function () {
  let student = {
    name: name.value,
    age: age.value,
    grade: grade.value,
  };

  if (student.name === "" || student.age === "" || student.grade === "") {
    alert("Please fill the form correctly!");
  } else {
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    result.innerHTML = `
      Welcome ${student.name} to Bright Future School <br><br>
    `;

    displayStudents();
  }
});
