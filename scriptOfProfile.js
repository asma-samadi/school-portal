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
  <div class='profile-info-div'>
  <div>
      <h1>${info.name}</h1>
      <p>Age: ${info.age}</p>
      <p>Grade: ${info.grade}</p>
      <p>Email: ${info.email}</p>
      <p>Phone: ${info.phone}</p>
      <p id="status-element">Status: ${info.status}</p>
    </div>
    <img src="${info.photo}"/>
  </div>
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
    contactEmail.innerHTML = `<h3>Email: ${info.email}</h3>`;
  });

  showPhone.addEventListener("click", function () {
    contactPhone.innerHTML = `<h3>Phone number: ${info.phone}</h3>`;
  });

  hideContact.addEventListener("click", function () {
    contactEmail.textContent = "";
    contactPhone.textContent = "";
  });
}

contactDetails();

// Status
let statusInput = document.querySelector("#status-input");
let updateStatusInput = document.querySelector("#updatestatus-input");

updateStatusInput.addEventListener("click", function (event) {
  event.preventDefault();

  let statusElement = document.querySelector("#status-element");
  let valueStatus = statusInput.value.trim().toLowerCase();

  if (valueStatus === "active" || valueStatus === "suspended") {
    let change = valueStatus.charAt(0).toUpperCase() + valueStatus.slice(1);

    statusElement.textContent = `Status: ${change}`;

    if (change === "Active") {
      statusElement.style.color = "green";
    } else {
      statusElement.style.color = "red";
    }
  } else {
    alert("Please write Active or Suspended");
  }
});
