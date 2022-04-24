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
var name = document.getElementById("name").value;
var letters = /^[A-Za-z]+$/;
if(name.match(letters)) {
return true;
} else {
alert("Please fill out your name right.");
return false;
}
}

function validatemail() {
var email = document.getElementById("email").value;
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
return true;
} else {
alert("You have entered an invalid email address!");
   return false;
}
}

function validatephone() {
var phone = document.getElementById("phone").value;
var phone = /^\d{8}$/;
if(num.match(phone)) {
return true;
} else {
alert("Your phone number is incorrect.");
}
}

function validatemsg() {
var message = /^[0-9a-zA-Z]+$/;
var valid = document.getElementById("message").value;
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
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    var alertTrigger = document.getElementById('liveAlertBtn')

    function alert(message, type) {
      var wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

      alertPlaceholder.append(wrapper)
    }

    if (alertTrigger) {
      alertTrigger.addEventListener('click', function () {
        alert('Nice, you triggered this alert message!', 'success')
      })
    }