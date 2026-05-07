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
let contactEmail = document.querySelector("#contact-info-email");
let contactPhone = document.querySelector("#contact-info-phone");
function contactDetails() {
  showEmail.addEventListener("click", function () {
    contactEmail.innerHTML = `<h2>Email: ${info.email}</h2>`;
  });

  showPhone.addEventListener("click", function () {
    contactPhone.innerHTML = `<h2>Phone number: ${info.phone}</h2>`;
  });

  hideContact.addEventListener("click", function () {
    contactEmail.textContent = "";
    contactPhone.textContent = "";
  });
}

contactDetails();
