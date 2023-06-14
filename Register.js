/*//Getting all the values
function register() {
const form = document.getElementById("form").value;
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const submitBtn = document.getElementById("submitt").value;

/*form.addEventListener("submit", (e) => {
    e.preventDefault();
});

submitBtn.addEventListener("submit", (e) => {
    const firstname = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    //firstName = firstName.value;
    const first = localStorage.setItem("firstName", firstName);

    //lastName = lastName.value;
    const last = localStorage.setItem("lastName", lastName);

    //email = email.value;
    const em = localStorage.setItem("email", email);

    //password = password.value;
    const pass = localStorage.setItem("password", password);



});

}*/

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };
  
  // Store the form data in localStorage
  localStorage.setItem('formData', JSON.stringify(formData));

  window.location.href='User.html'
  
  // Reset the form fields
  form.reset();
});



// Retrieve and display the stored form data
window.addEventListener('DOMContentLoaded', function() {
  const storedFormData = localStorage.getItem('formData');
  
  if (storedFormData) {
    const formData = JSON.parse(storedFormData);
    
    // Populate the form fields with the stored data
    document.getElementById('firstName').value = formData.firstName;
    document.getElementById('lastName').value = formData.lastName;
    document.getElementById('email').value = formData.email;
    document.getElementById('password').value = formData.password;
  }
});


