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

enrollButton.addEventListener("click", function () {
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

// Show user info on profile page
let container = document.querySelector("#user-info");

let studentInfo = [
  {
    name: "Suda",
    age: 23,
    grade: 2,
    photo: "images/suda.jpg",
    email: "suda99@gmail.com",
    phone: "0789654321",
    status: "Active",
  },
  {
    name: "Salwa",
    age: 33,
    grade: 12,
    photo: "images/salwa.jpg",
    email: "salwa88@gmail.com",
    phone: "0709784321",
    status: "Active",
  },
  {
    name: "Shila",
    age: 29,
    grade: 11,
    photo: "images/shila.jpg",
    email: "shila@gmail.com",
    phone: "0798765439",
    status: "Suspended",
  },
];

// random student
let randomIndex = Math.floor(Math.random() * studentInfo.length);
let info = studentInfo[randomIndex];

// run after page loads
window.onload = function () {
  container.innerHTML = `
    <img src="${info.photo}" width="120" style="border-radius:50%" />
    <h2>${info.name}</h2>
    <p>Age: ${info.age}</p>
    <p>Grade: ${info.grade}</p>
    <p>Email: ${info.email}</p>
    <p>Phone: ${info.phone}</p>
    <p>Status: ${info.status}</p>
`;
};

// contact Information
let showEmail = document.querySelector("#show-email");
let showPhone = document.querySelector("#show-phone");
let hideContact = document.querySelector("#hide-info");
let contact = document.querySelector("#contact-info");

showEmail.addEventListener("click", function () {
  contact.innerHTML = `<h2>Email: ${info.email}</h2>`;
});
