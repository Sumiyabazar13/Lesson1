const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function validatename() {
var name = document.getElementById("fname").value;
var letters = /^[A-Za-z]+$/;
if(name.match(letters)) {
return true;
} else {
alert("Please fill out your name right.");
return false;
}
}

function validatemail() {
var email = document.getElementById("femail").value;
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
return true;
} else {
alert("You have entered an invalid email address!");
   return false;
}
}

function validatephone() {
var num = document.getElementById("fnum").value;
var phone = /^\d{8}$/;
if(num.match(phone)) {
return true;
} else {
alert("Your phone number is incorrect.");
}
}

function validatemsg() {
var letterNumber = /^[0-9a-zA-Z]+$/;
var valid = document.getElementById("fmsg").value;
if(valid.match(letterNumber)) {
return true;
} else {
alert("Invalid message!");
}
}


function required() {
validatename();
validatemail();
validatephone();
validatemsg();
}