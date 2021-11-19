// const input = document.querySelector('#email');
// const input = document.querySelector(".btn-container input");
// const form = document.querySelector(".btn-container");
// const inputs = document.querySelectorAll(".signup-form input");

// const form = document.querySelector(".btn-container");
// const inputs = document.querySelectorAll(".btn-container input");

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form.email.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form.email.focus();
    return false;
  }
}



// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   inputs.forEach((input) => {
//     if (!input.value) {
//         console.log('test');
//         input.parentElement.children[1].classList.add("error");
//         input.parentElement.children[2].classList.add("error");
//     } else {
//         console.log('test2');
//       input.parentElement.children[1].classList.remove("error");
//       input.parentElement.children[2].classList.remove("error");
//     }
//   });
// });

// input.addEventListener("submit", validateForm);

// form.addEventListener("c", (e) => {

// input.addEventListener("submit", (e) => {
// function validateForm() {
//   e.preventDefault();
//   console.log("test validateForm");
//   var x = document.forms["myForm"]["email"].value;
//   var atpos = x.indexOf("@");
//   var dotpos = x.lastIndexOf(".");
//   if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
// alert("Not a valid e-mail address");
// return false;
//   }
// });

// form.addEventListener("c", (e) => {
//   var validRegex =
// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   e.preventDefault();
//   if (!input.value) {
//     console.log("test");
//     input.parentElement.children[1].classList.add("error");
//     input.parentElement.children[2].classList.add("error");
//   } else {
//     console.log("working?");
//     input.parentElement.children[1].classList.remove("error");
//     input.parentElement.children[2].classList.remove("error");
//   }
//   if (!input.value.match(validRegex)) {
// console.log("Valid email address!");
//   } else {
// console.log("not working");
//   }
//   input.forEach((input) => {
//     if (!input.value) {
//       console.log("test");
//       input.parentElement.children[1].classList.add("error");
//       input.parentElement.children[2].classList.add("error");
//     } else {
//       console.log("working?");
//       input.parentElement.children[1].classList.remove("error");
//       input.parentElement.children[2].classList.remove("error");
//     }
// });
// });

// input.addEventListener('input', function(e) {
//     e.preventDefault();
// // function ValidateEmail(input) {
//     console.log('tests');
//   var validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (input.value.match(validRegex)) {
//     console.log("Valid email address!");
//     document.form.email.focus();
//     return true;
//   } else {
//     console.log("Invalid email address!");
//     document.form.email.focus();
//     return false;
//   }
// });
